import React from "react";
import { Link } from "react-router-dom";

const Child = ({ sendData }) => {
  let goData = () => {
    let d = "Hello From Child";
    sendData(d);
  };
  return (
    <div>
      Child
      <button onClick={goData}>Go</button>
      <Link to="/nk">Hellom</Link>
    </div>
  );
};

export default Child;
