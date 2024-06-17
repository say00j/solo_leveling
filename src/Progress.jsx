import React, { useState, useEffect } from "react";
import "./Progress.css";

const Progress = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getData(value) {
    return parseInt(localStorage.getItem(value));
  }
  function Erase() {
    localStorage.setItem("progressValue", 0);
    setProgressValue(0);
    localStorage.setItem("progressValue2", 0);
    setProgressValue2(0);
    localStorage.setItem("progressValue3", 0);
    setProgressValue3(0);
    localStorage.setItem("progressValue4", 0);
    setProgressValue4(0);
    localStorage.setItem("progressValue5", 0);
    setProgressValue5(0);
  }
  const [progressValue, setProgressValue] = useState(
    getData("progressValue") || 0
  );
  const [progressValue2, setProgressValue2] = useState(
    getData("progressValue2") || 0
  );
  const [progressValue3, setProgressValue3] = useState(
    getData("progressValue3") || 0
  );
  const [progressValue4, setProgressValue4] = useState(
    getData("progressValue4") || 0
  );
  const [progressValue5, setProgressValue5] = useState(
    getData("progressValue5") || 0
  );

  let incrementCount = 1;
  let level = parseInt(
    (progressValue +
      progressValue2 +
      progressValue3 +
      progressValue4 +
      progressValue5) /
      5
  );
  function handleProgressIncrement(key) {
    console.log(key);
    switch (key) {
      case 1:
        setProgressValue((prevValue) =>
          Math.min(prevValue + incrementCount, 150)
        ); // Update state first
        localStorage.setItem("progressValue", progressValue + 1);
        console.log("working");
        break;
      case 2:
        setProgressValue2((prevValue) =>
          Math.min(prevValue + incrementCount, 150)
        ); // Update state first
        localStorage.setItem("progressValue2", progressValue2 + 1);
        break;
      case 3:
        setProgressValue3((prevValue) =>
          Math.min(prevValue + incrementCount, 150)
        ); // Update state first
        localStorage.setItem("progressValue3", progressValue3 + 1);
        break;
      case 4:
        setProgressValue4((prevValue) =>
          Math.min(prevValue + incrementCount, 150)
        ); // Update state first
        localStorage.setItem("progressValue4", progressValue4 + 1);
        break;
      case 5:
        setProgressValue5((prevValue) =>
          Math.min(prevValue + incrementCount, 150)
        ); // Update state first
        localStorage.setItem("progressValue5", progressValue5 + 1);
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
                style={{ width: `${progressValue / 1.5}%` }}
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
                style={{ width: `${progressValue2 / 1.5}%` }}
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
                style={{ width: `${progressValue3 / 1.5}%` }}
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
                style={{ width: `${progressValue4 / 1.5}%` }}
              ></div>
            </div>
            <p>{progressValue4}</p>
          </div>
          <div id="progress2">
            <p>Experience</p>
            <div
              className="progress-bar"
              onClick={() => {
                handleProgressIncrement(5);
              }}
            >
              <div
                className="progress"
                style={{ width: `${progressValue5 / 1.5}%` }}
              ></div>
            </div>
            <p>{progressValue5}</p>
          </div>

          <button
            className="cool-button"
            onClick={() => {
              let confirmation = confirm("This will erase your progress!.");
              if (confirmation) {
                Erase();
              }
            }}
          >
            Clear
          </button>
        </div>
        <div id="level_container">
          <p id="level">{level}</p>
          <p id="level_label">Level</p>
          <div id="time_container">
            <p id="time">{currentTime}</p>
            <p id="time_label">Time</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
