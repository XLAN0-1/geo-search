import React from "react";
import "../App.css";

function Details(props) {
  return (
    <div className="details-grid">
      <div className="details-grid-item first-detail-grid-item">
        <h1>{props.name}</h1>
      </div>
      <div className="details-grid-item">
        <p><strong>Native Name:</strong> {props.nativeName}</p>
        <p><strong>Population:</strong> {props.population}</p>
        <p><strong>Region:</strong> {props.region}</p>
        <p><strong>Sub Region:</strong> {props.subRegion}</p>
        <p><strong>Capital:</strong> {props.capital}</p>
      </div>
      <div className="details-grid-item">
          <p><strong>Top Level Domain:</strong> {props.domain}</p>
          <p><strong>Currencies:</strong> {props.currencies}</p>
          <p><strong>Languages:</strong> {props.languages}</p>
      </div>
      <div className="details-grid-item last-detail-grid-item">
          <p><strong>Border Countries:</strong> {props.borderCountries}</p>
      </div>
    </div>
  );
}


export default Details;