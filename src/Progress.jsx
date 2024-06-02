import React from "react";
import { useState } from "react";
import "./Progress.css";

const Progress = () => {
  const [progressValue, setProgressValue] = useState(
    parseInt(localStorage.getItem("progressValue"))
  );
  const [progressValue2, setProgressValue2] = useState(
    parseInt(localStorage.getItem("progressValue2"))
  );
  const [progressValue3, setProgressValue3] = useState(
    parseInt(localStorage.getItem("progressValue3"))
  );
  const [progressValue4, setProgressValue4] = useState(
    parseInt(localStorage.getItem("progressValue4"))
  );
  let incrementCount = 1;
  let level = parseInt(
    (progressValue + progressValue2 + progressValue3 + progressValue4) / 4
  );
  function handleProgressIncrement(key) {
    console.log(key);
    switch (key) {
      case 1:
        setProgressValue((prevValue) =>
          Math.min(prevValue + incrementCount, 100)
        ); // Update state first
        localStorage.setItem("progressValue", progressValue + 1);
        break;
      case 2:
        setProgressValue2((prevValue) =>
          Math.min(prevValue + incrementCount, 100)
        ); // Update state first
        localStorage.setItem("progressValue2", progressValue2 + 1);
        break;
      case 3:
        setProgressValue3((prevValue) =>
          Math.min(prevValue + incrementCount, 100)
        ); // Update state first
        localStorage.setItem("progressValue3", progressValue3 + 1);
        break;
      case 4:
        setProgressValue4((prevValue) =>
          Math.min(prevValue + incrementCount, 100)
        ); // Update state first
        localStorage.setItem("progressValue4", progressValue4 + 1);
        break;
      default:
        console.log("Default");
        break;
    }
  }

  return (
    <>
      <div id="progress_container">
        <div id="progressBarContainer">
          <h2>Progress</h2>
          <div id="progress1">
            <p>Strength</p>
            <div
              className="progress-bar"
              onClick={() => {
                handleProgressIncrement(1);
              }}
            >
              <div
                className="progress"
                style={{ width: `${progressValue}%` }}
              ></div>
            </div>
            <p>{progressValue}</p>
          </div>
          <div id="progress2">
            <p>Speed</p>
            <div
              className="progress-bar"
              onClick={() => {
                handleProgressIncrement(2);
              }}
            >
              <div
                className="progress"
                style={{ width: `${progressValue2}%` }}
              ></div>
            </div>
            <p>{progressValue2}</p>
          </div>
          <div id="progress2">
            <p>Intellect</p>
            <div
              className="progress-bar"
              onClick={() => {
                handleProgressIncrement(3);
              }}
            >
              <div
                className="progress"
                style={{ width: `${progressValue3}%` }}
              ></div>
            </div>
            <p>{progressValue3}</p>
          </div>
          <div id="progress2">
            <p>Discipline</p>
            <div
              className="progress-bar"
              onClick={() => {
                handleProgressIncrement(4);
              }}
            >
              <div
                className="progress"
                style={{ width: `${progressValue4}%` }}
              ></div>
            </div>
            <p>{progressValue4}</p>
          </div>
          <button
            className="cool-button"
            onClick={() => {
              let confirmation = confirm("This will erase your progress!.");
              if (confirmation) {
                localStorage.setItem("progressValue", 0);
                setProgressValue(0);
                localStorage.setItem("progressValue2", 0);
                setProgressValue2(0);
                localStorage.setItem("progressValue3", 0);
                setProgressValue3(0);
                localStorage.setItem("progressValue4", 0);
                setProgressValue4(0);
              }
            }}
          >
            Clear
          </button>
        </div>
        <div id="level_container">
          <p id="level">{level}</p>
          <p id="level_label">Level</p>
        </div>
      </div>
    </>
  );
};

export default Progress;
