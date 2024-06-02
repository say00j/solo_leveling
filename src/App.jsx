import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Progress from "./Progress";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="main">
        <Progress />
      </div>
    </>
  );
};

export default App;
