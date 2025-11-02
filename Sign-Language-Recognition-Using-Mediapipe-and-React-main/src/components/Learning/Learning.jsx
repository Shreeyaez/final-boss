import React from "react";
import "./Learning.css";

const alphabets = [
  {
    letter: "A",
    image: "/images/asl/A.png",
    description: "Make a fist with your thumb resting along the outside of your fingers.",
  },
  {
    letter: "B",
    image: "/images/asl/B.png",
    description: "Extend all fingers straight up, thumb across your palm. Keep your fingers together.",
  },
  {
    letter: "C",
    image: "/images/asl/C.png",
    description: "Curve your fingers and thumb to form the shape of the letter 'C'.",
  },
  {
    letter: "D",
    image: "/images/asl/D.png",
    description: "Raise your index finger and touch its tip to your thumb, keeping the other fingers curled down.",
  },
  {
    letter: "E",
    image: "/images/asl/E.png",
    description: "Curl your fingers so the tips touch your thumb — like gently holding something small.",
  },
  {
    letter: "F",
    image: "/images/asl/F.png",
    description: "Make a circle with your thumb and index finger; other fingers point up.",
  },
  {
    letter: "G",
    image: "/images/asl/G.png",
    description: "Hold your index finger and thumb parallel, like you’re showing a small gap between them.",
  },
  {
    letter: "H",
    image: "/images/asl/H.png",
    description: "Extend your index and middle finger together, palm facing sideways.",
  },
  {
    letter: "I",
    image: "/images/asl/I.png",
    description: "Make a fist and extend your pinky finger straight up.",
  },
  {
    letter: "J",
    image: "/images/asl/J.png",
    description: "Start with the 'I' handshape, then trace the letter 'J' in the air with your pinky.",
  },
  {
    letter: "K",
    image: "/images/asl/K.png",
    description: "Raise your index and middle fingers like a peace sign, thumb touching the base of the middle finger.",
  },
  {
    letter: "L",
    image: "/images/asl/L.png",
    description: "Extend your thumb and index finger to form an 'L' shape, other fingers folded down.",
  },
  {
    letter: "M",
    image: "/images/asl/M.png",
    description: "Tuck your thumb under your first three fingers, resting against your palm.",
  },
  {
    letter: "N",
    image: "/images/asl/N.png",
    description: "Tuck your thumb under your first two fingers, like a smaller version of 'M'.",
  },
  {
    letter: "O",
    image: "/images/asl/O.png",
    description: "Form your fingers and thumb into a round 'O' shape.",
  },
  {
    letter: "P",
    image: "/images/asl/P.png",
    description: "Form a 'K' handshape but tilt your hand downward like pointing at something.",
  },
  {
    letter: "Q",
    image: "/images/asl/Q.png",
    description: "Make a 'G' handshape and point it downward.",
  },
  {
    letter: "R",
    image: "/images/asl/R.png",
    description: "Cross your index and middle fingers while keeping others curled in.",
  },
  {
    letter: "S",
    image: "/images/asl/S.png",
    description: "Make a tight fist with your thumb tucked in front of your fingers.",
  },
  {
    letter: "T",
    image: "/images/asl/T.png",
    description: "Make a fist and tuck your thumb between your index and middle fingers.",
  },
  {
    letter: "U",
    image: "/images/asl/U.png",
    description: "Hold your index and middle fingers together, pointing upward, palm forward.",
  },
  {
    letter: "V",
    image: "/images/asl/V.png",
    description: "Raise your index and middle fingers apart to make a 'V' shape.",
  },
  {
    letter: "W",
    image: "/images/asl/W.png",
    description: "Raise your index, middle, and ring fingers apart to make a 'W'.",
  },
  {
    letter: "X",
    image: "/images/asl/X.png",
    description: "Make a hook shape with your index finger while other fingers are in a fist.",
  },
  {
    letter: "Y",
    image: "/images/asl/Y.png",
    description: "Extend your thumb and pinky finger, fold the rest — like a phone gesture.",
  },
  {
    letter: "Z",
    image: "/images/asl/Z.png",
    description: "Raise your index finger and draw a 'Z' shape in the air.",
  },
];

const Learning = () => {
  return (
    <div className="learning-container">
      <h1 className="learning-title">Learn ASL Alphabets 🤟</h1>
      <p className="learning-desc">Each letter below shows its hand sign and a short guide to perform it correctly.</p>

      <div className="alphabet-grid">
        {alphabets.map((item, index) => (
          <div key={index} className="alphabet-card">
            <img src={item.image} alt={item.letter} />
            <h3>{item.letter}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learning;
