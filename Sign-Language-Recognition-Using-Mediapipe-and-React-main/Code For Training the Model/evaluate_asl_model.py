# File: Code For Training the Model/evaluate_asl_model.py

import mediapipe as mp
import numpy as np
from sklearn.metrics import confusion_matrix, classification_report, ConfusionMatrixDisplay
import matplotlib.pyplot as plt
import os

# --- 1. Load MediaPipe Task model ---
BaseOptions = mp.tasks.BaseOptions
GestureRecognizer = mp.tasks.vision.GestureRecognizer
GestureRecognizerOptions = mp.tasks.vision.GestureRecognizerOptions
VisionRunningMode = mp.tasks.vision.RunningMode

# Path to your trained model
MODEL_PATH = "../Trained Model/sign_language_recognizer_25-04-2023.task"

# --- 2. Create recognizer instance ---
options = GestureRecognizerOptions(
    base_options=BaseOptions(model_asset_path=MODEL_PATH),
    running_mode=VisionRunningMode.IMAGE
)
recognizer = GestureRecognizer.create_from_options(options)

# --- 3. Test dataset directory ---
# Create this manually in the same folder level as "Trained Model"
TEST_DIR = "../Test Dataset"
labels = sorted(os.listdir(TEST_DIR))

y_true = []
y_pred = []

# --- 4. Run recognition on test images ---
for label in labels:
    folder = os.path.join(TEST_DIR, label)
    if not os.path.isdir(folder):
        continue

    for file in os.listdir(folder):
        if file.lower().endswith(('.jpg', '.png', '.jpeg')):
            image_path = os.path.join(folder, file)
            image = mp.Image.create_from_file(image_path)

            result = recognizer.recognize(image)

            if result.gestures:
                predicted_label = result.gestures[0][0].category_name
            else:
                predicted_label = "Unknown"

            y_true.append(label)
            y_pred.append(predicted_label)

# --- 5. Generate evaluation metrics ---
print("\n=== Classification Report ===\n")
print(classification_report(y_true, y_pred, zero_division=0))

# --- 6. Confusion Matrix ---
cm = confusion_matrix(y_true, y_pred, labels=labels)
disp = ConfusionMatrixDisplay(confusion_matrix=cm, display_labels=labels)
disp.plot(cmap='Blues', xticks_rotation=45)
plt.title("Confusion Matrix - ASL Gesture Recognition")
plt.show()

# --- 7. Optional: Save metrics to file ---
os.makedirs("../Evaluation Results", exist_ok=True)
plt.savefig("../Evaluation Results/confusion_matrix.png")
with open("../Evaluation Results/classification_report.txt", "w") as f:
    f.write(classification_report(y_true, y_pred, zero_division=0))
