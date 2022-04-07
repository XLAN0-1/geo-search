import React from "react";
import "../App.css";
import {FaAngleDown} from "react-icons/fa"

function DropDownMenu(props) {
  const [dropDownState, setDropDownState] = React.useState(false);
  const [region, setRegion] = React.useState("Filter by region");
  const [showAllCountires, setShowAllCountries] = React.useState(true);

  window.onClick = () => {
    console.log("I was clicked");
  };

  //Function to toggle between the two state of the drop-down
  function toggleDropDown() {
    setDropDownState((prevState) => {
      return !prevState;
    });
  }

  //OnClick listener for the drop down items
  function dropDownItemClickListener(value) {
    //Check if the user wants to show all the countries
    if (value === "All") {
      setShowAllCountries(true);
      setRegion("Filter by Region");
    } else {
      setShowAllCountries(false);
      setRegion(value);
    }
    toggleDropDown();
    props.callback(value);
  }

  return (
    <div className="drop-down-menu">
      <button onClick={toggleDropDown} className="drop-button btn">
        {region}      <FaAngleDown  style={{position: "absolute", right:"3rem"}}/>
      </button>
      <div
        className={
          dropDownState
            ? "isActive drop-down-content"
            : "isNotActive drop-down-content"
        }
      >
        {region !== "Africa" && (
          <button
            onClick={() => dropDownItemClickListener("Africa")}
            className="drop-down-item btn btn-first"
          >
            Africa
          </button>
        )}
        {region !== "Asia" && (
          <button
            onClick={() => dropDownItemClickListener("Asia")}
            className="drop-down-item btn"
          >
            Asia
          </button>
        )}
        {region !== "Europe" && (
          <button
            onClick={() => dropDownItemClickListener("Europe")}
            className="drop-down-item btn"
          >
            Europe
          </button>
        )}
        {region !== "Americas" && (
          <button
            onClick={() => dropDownItemClickListener("Americas")}
            className="drop-down-item btn"
          >
            America
          </button>
        )}

        {region !== "Oceania" && (
          <button
            onClick={() => dropDownItemClickListener("Oceania")}
            className="drop-down-item btn btn-last"
          >
            Oceania
          </button>
        )}

        {!showAllCountires && (
          <button
            onClick={() => dropDownItemClickListener("All")}
            className="drop-down-item btn btn-last"
          >
            All
          </button>
        )}
      </div>
    </div>
  );
}

export default DropDownMenu;
