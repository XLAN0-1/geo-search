import React from "react";
import Details from "./Details";
import BackButton from "./BackButton";
import "../App.css";

function CountryDetails(props) {
  return (
    <div>
      <BackButton goToHome={props.goToHome} />
      <div className="country-grid">
        <div className="country-grid-item">
          <img className="detail-country-img" src={props.img} />
        </div>
        <div className="country-grid-item">
          <Details
            name={props.name}
            nativeName={props.nativeName}
            population={props.population}
            region={props.region}
            subRegion={props.subRegion}
            capital={props.capital}
            domain={props.domain}
            currencies={props.currencies}
            languages={props.languages}
            borderCountries={props.borderCountries}
          />
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
