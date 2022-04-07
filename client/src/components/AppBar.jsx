import React from "react";
import { BsMoon, BsFillMoonFill } from "react-icons/bs";

function AppBar(props) {
  // const [mode, setMode] = React.useState("light");
  // const darkModestyle = { backgroundColor: "" };

  // function toggleMode() {
  //   props.callback();
  //   setMode((prevMode) => {
  //     if (prevMode === "light") return "dark";
  //     else return "light";
  //   });
  // }

  // const iconStyle = {
  //   marginRight: "0.5rem",
  // };

  return (
    <div className="app-bar">
      <p className="title">Where in the World?</p>
      <div className="filter">
        {/* <button className="filter-btn" onClick={toggleMode}>
          {mode === "light" ? (
            <BsFillMoonFill style={iconStyle} />
          ) : (
            <BsMoon style={iconStyle} />
          )}
          {mode === "light" ? "Dark Mode" : "Light Mode"}
        </button> */}
      </div>
    </div>
  );
}

export default AppBar;
