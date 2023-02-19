import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import * as tmPose from "@teachablemachine/pose";

import { StyledButton } from "../../components/buttons/buttons.styled";
import { IFaceClass, IStepInterface } from "../../interfaces/verify.interfaces";

const NUM_TEST = 5;

function SecondVerifier({ setVerifyStep }: IStepInterface) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const positionRef = useRef<string>();
  const [modelLoaded, setModelLoaded] = useState(false);
  const [predictionStatus, setPredictionStatus] = useState<IFaceClass>({
    prevClass: "",
    currentClass: "",
    allClasses: [],
  });

  const [currentPose, setCurrentPose] = useState<string>("Loading...");
  positionRef.current = currentPose;
  const [verificationCount, setVerificationCount] = useState(0);
  const [verificationDone, setVerificationDone] = useState(false);
  const [step, setStep] = useState(0);

  // console.log("Prediction Status", predictionStatus);
  const URL = import.meta.env.VITE_MODEL_URL;
  let model: tmPose.CustomPoseNet,
    webcam: tmPose.Webcam,
    ctx: CanvasRenderingContext2D | null;

  async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmPose.loadFromFiles() in the API to support files from a file picker
    model = await tmPose.load(modelURL, metadataURL);
    if (!modelLoaded) {
      setPredictionStatus((prev) => ({
        ...prev,
        allClasses: model.getClassLabels(),
      }));
      setModelLoaded(true);
    }

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmPose.Webcam(300, 300, flip); // width, height, flip

    await webcam.setup(); // request access to the webcam
    webcam.play();
    window.requestAnimationFrame(loop);

    // append/get elements to the DOM
    const canvas = canvasRef?.current;
    canvas!.width = 300;
    canvas!.height = 300;
    ctx = canvas!.getContext("2d");
  }

  async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    if (verificationCount <= NUM_TEST) window.requestAnimationFrame(loop);
  }

  async function predict() {
    // Prediction #1: run input through posenet
    // estimatePose can take in an image, video or canvas html element
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    // Prediction 2: run input through teachable machine classification model
    const prediction = await model.predict(posenetOutput);

    // console.log("Prediction", prediction);
    // console.log("Hello");

    const bestConfidentIndex = prediction
      .map(({ probability }) => probability.toFixed(2))
      .reduce((iMax, x, i, arr) => (x > arr[iMax] ? i : iMax), 0);
    const predictedClass = prediction[bestConfidentIndex];
    // console.log("Predicted", predictedClass);

    if (predictedClass.className === positionRef.current) {
      if (verificationCount >= NUM_TEST - 1) {
        webcam.stop();
        setVerificationDone(true);
      }
      console.log("Match", verificationCount, NUM_TEST)
      setVerificationCount((prev) => prev + 1);
    }

    if (predictedClass.className !== predictionStatus.currentClass) {
      setPredictionStatus((prev) => ({
        ...prev,
        prevClass: prev.currentClass,
        currentClass: predictedClass.className,
      }));
    }

    ctx!.drawImage(webcam.canvas, 0, 0);
  }

  useEffect(() => {
    if (modelLoaded) {
      const random = Math.floor(
        Math.random() * predictionStatus.allClasses.length
      );
      setCurrentPose(predictionStatus.allClasses[random].toString());
      console.log("Current Pose", predictionStatus.allClasses[random]);
      console.log(verificationCount, positionRef.current);
    }
  }, [verificationCount, modelLoaded]);

  const handleStart = () => {
    setStep(1);
    init();
  };
  return (
    <StyledContainer>
      <h2>Liveness Detection</h2>
      {step === 0 && (
        <>
          <p>
            You will now be asked to perform some activities to ascertain that
            you are not a bot
          </p>
          <p>Click on Start button</p>
        </>
      )}
      {step === 1 && (
        <>
          {verificationCount === 0 && (
            <p>Please wait for the camera to appear on screen and then</p>
          )}

          {modelLoaded ? (
            <>
              <p>Please Turn your face to {currentPose} position.</p>
              <canvas ref={canvasRef} style={{ borderRadius: "50%" }}></canvas>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </>
      )}
      {(!modelLoaded || step === 0) && (
        <StyledButton primary={true} onClick={handleStart}>
          <span>Start</span>
        </StyledButton>
      )}
      {verificationDone && <p>Done :)</p>}
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 25px;
  margin-top: 25px;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);

  border-radius: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-align: center;
  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.background.white04};
  }
  p {
    margin: 5px 0px;
    color: ${({ theme }) => theme.colors.background.white03};
  }
`;
export default SecondVerifier;
