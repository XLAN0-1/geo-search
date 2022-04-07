import React from "react";
import {FaArrowLeft} from "react-icons/fa"

function BackButton(props) {
  return (
    <button onClick={props.goToHome} className="back-button">
      <FaArrowLeft/>   Back
    </button>
  );
}

export default BackButton
