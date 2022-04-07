import React from "react";
import CountryCard from "./CountryCard";
import "../App.css";

function GridContainer(props) {
  //Create the dark mode style 
  


  return (
    <div className="grid-container">
      {props.data.map((country, index) => {
        return (
          <CountryCard
            index={index}
            key={country.numericCode}
            img={country.flags.svg}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            showDetails={props.showDetails}
          />
        );
      })}
    </div>
  );
}

export default GridContainer;
