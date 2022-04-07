import React from "react";
import "../App.css";

function CountryCard(props) {
  //Function to handle item click
  function countryOnClickListener(){
    props.showDetails(props.index);
  }


  return (
    <div className="grid-item" onClick={countryOnClickListener}>
    <div className="Country-card">
      <img className="Country-flag" src={props.img} alt="countryImg" />
      <div className="Country-details">
        <p className="country-name"><strong>{props.name}</strong></p>
        <p><strong>Population:</strong> {props.population}</p>
        <p><strong>Region:</strong> {props.region}</p>
        <p><strong>Capital:</strong> {props.capital}</p>
      </div>
    </div>
    </div>
  );
}

export default CountryCard;
