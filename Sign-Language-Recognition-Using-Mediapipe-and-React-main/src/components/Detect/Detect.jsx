import React, { useState, useRef, useEffect, useCallback } from "react";
import "./Detect.css";
import { v4 as uuidv4 } from "uuid";
import { FilesetResolver, GestureRecognizer } from "@mediapipe/tasks-vision";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { HAND_CONNECTIONS } from "@mediapipe/hands";
import Webcam from "react-webcam";
import { SignImageData } from "../../data/SignImageData";
import { useDispatch, useSelector } from "react-redux";
import { addSignData } from "../../redux/actions/signdataaction";
import ProgressBar from "./ProgressBar/ProgressBar";
import DisplayImg from "../../assests/displayGif.gif";

const CONFIDENCE_THRESHOLD = 0.9; // Only record gestures with ≥95% confidence
let startTime = "";

const Detect = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const requestRef = useRef();

  const [webcamRunning, setWebcamRunning] = useState(false);
  const [gestureOutput, setGestureOutput] = useState("");
  const [gestureRecognizer, setGestureRecognizer] = useState(null);
  const [runningMode, setRunningMode] = useState("IMAGE");
  const [progress, setProgress] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);

  const recordedSequenceRef = useRef([]); // Stores recorded letters
  const [recordedSequence, setRecordedSequence] = useState([]); // For rendering

  const [detectedData, setDetectedData] = useState([]);
  const user = useSelector((state) => state.auth?.user);
  const { accessToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Change displayed image every 5s
  useEffect(() => {
    let intervalId;
    if (webcamRunning) {
      intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * SignImageData.length);
        const randomImage = SignImageData[randomIndex];
        setCurrentImage(randomImage);
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [webcamRunning]);

  // Disable logs in production/development
  if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "production"
  ) {
    console.log = function () {};
  }

  const predictWebcam = useCallback(() => {
    if (!gestureRecognizer) return;

    if (runningMode === "IMAGE") {
      setRunningMode("VIDEO");
      gestureRecognizer.setOptions({ runningMode: "VIDEO" });
    }

    const nowInMs = Date.now();
    const results = gestureRecognizer.recognizeForVideo(
      webcamRef.current.video,
      nowInMs
    );

    const canvasCtx = canvasRef.current.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;
    webcamRef.current.video.width = videoWidth;
    webcamRef.current.video.height = videoHeight;
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    // Draw landmarks
    if (results.landmarks) {
      for (const landmarks of results.landmarks) {
        drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
          color: "#00FF00",
          lineWidth: 5,
        });
        drawLandmarks(canvasCtx, landmarks, { color: "#FF0000", lineWidth: 2 });
      }
    }

    // Handle gesture recognition
    if (results.gestures.length > 0) {
      const detectedGesture = results.gestures[0][0];
      const score = detectedGesture.score;
      const sign = detectedGesture.categoryName;

      setGestureOutput(sign);
      setProgress(Math.round(score * 100));

      // Record only if confidence ≥ 95%
      if (score >= CONFIDENCE_THRESHOLD) {
        // Avoid consecutive duplicates
        if (recordedSequenceRef.current.at(-1) !== sign) {
          recordedSequenceRef.current.push(sign);
          setRecordedSequence([...recordedSequenceRef.current]);
        }
      }
    } else {
      setGestureOutput("");
      setProgress(0);
    }

    if (webcamRunning) {
      requestRef.current = requestAnimationFrame(predictWebcam);
    }

    canvasCtx.restore();
  }, [gestureRecognizer, runningMode, webcamRunning]);

  const animate = useCallback(() => {
    requestRef.current = requestAnimationFrame(animate);
    predictWebcam();
  }, [predictWebcam]);

  const enableCam = useCallback(() => {
    if (!gestureRecognizer) {
      alert("Please wait for gestureRecognizer to load");
      return;
    }

    if (webcamRunning) {
      setWebcamRunning(false);
      cancelAnimationFrame(requestRef.current);
      setCurrentImage(null);
    } else {
      setWebcamRunning(true);
      startTime = new Date();
      requestRef.current = requestAnimationFrame(animate);
    }
  }, [gestureRecognizer, webcamRunning, animate]);

  useEffect(() => {
    async function loadGestureRecognizer() {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
      );
      const recognizer = await GestureRecognizer.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: "/models/sign_language_recognizer_25-04-2023.task",
        },
        numHands: 2,
        runningMode: runningMode,
      });
      setGestureRecognizer(recognizer);
    }
    loadGestureRecognizer();
  }, [runningMode]);

  return (
    <>
      <div className="signlang_detection-container">
        {accessToken ? (
          <>
            <div style={{ position: "relative" }}>
              <Webcam
                audio={false}
                ref={webcamRef}
                className="signlang_webcam"
              />
              <canvas ref={canvasRef} className="signlang_canvas" />

              <div className="signlang_data-container">
                <button onClick={enableCam}>
                  {webcamRunning ? "Stop" : "Start"}
                </button>

                <div className="signlang_data">
                  <p className="gesture_output">{gestureOutput}</p>
                  {progress ? <ProgressBar progress={progress} /> : null}
                </div>
              </div>

              {/* Recorded word display */}
              <div
                style={{
                  marginTop: "20px",
                  padding: "12px",
                  background: "#f0f0f0",
                  borderRadius: "8px",
                  textAlign: "center",
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  width: "100%",
                }}
              >
                <h3 style={{ margin: "5px 0" }}>Word Formed:</h3>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#333",
                    letterSpacing: "5px",
                  }}
                >
                  {recordedSequence.length > 0
                    ? recordedSequence.join("")
                    : "-"}
                </p>
                <button
                  style={{
                    padding: "8px 16px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                  onClick={() => {
                    recordedSequenceRef.current = [];
                    setRecordedSequence([]);
                  }}
                >
                  Reset Word
                </button>
              </div>
            </div>

            <div className="signlang_imagelist-container">
              <h2 className="gradient__text">Image</h2>
              <div className="signlang_image-div">
                {currentImage ? (
                  <img src={currentImage.url} alt={`img ${currentImage.id}`} />
                ) : (
                  <h3 className="gradient__text">
                    Click on the Start Button <br /> to practice with Images
                  </h3>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="signlang_detection_notLoggedIn">
            <h1 className="gradient__text">Please Login !</h1>
            <img src={DisplayImg} alt="display-img" />
            <p>
              We Save Your Detection Data to show your progress and learning in
              dashboard, So please Login to Test this Detection Feature.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Detect;
