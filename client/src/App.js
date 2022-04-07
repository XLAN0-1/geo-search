import React from "react";
import "./App.css";
import GridContainer from "./components/GridContainer";
import AppBar from "./components/AppBar";
import QueryBar from "./components/QueryBar";
import CountryDetails from "./components/CountryDetails";
import data from "./data";

function App() {
  //Create a state to know when the user is in the details part
  const [countries, setCountries] = React.useState(data);
  const [isInDetails, setIsInDetails] = React.useState(false);
  const [countryObj, setCountryObj] = React.useState({});
  const [countryLanguages, setCountryLanguages] = React.useState("");
  const [countryCurrencies, setCountryCurrencies] = React.useState("");
  // const [isInDarkMode, setIsInDarkMode] = React.useState(false);

  //Function to generate the country currencies from the array
  function generateCountryCurrencies() {
    if(typeof countryObj.currencies !== "undefined"){
      var value ="";
      countryObj.currencies.forEach((element) => {
        value += " " + element.name;
      });
      setCountryCurrencies(value);
    }
  }

  //Function to generate the country languages from the array
  function generateCountryLanguages() {
    if(typeof countryObj.languages !== "undefined"){
      var value ="";
      countryObj.languages.forEach((element) => {
        value += " " + element.name;
      });
      setCountryLanguages(value);
    }
  }

  //function to filter the data based on the region
  function filterDataByRegion(filterQuery) {
    if (filterQuery === "All") {
      setCountries(data);
    } else {
      setCountries(
        data.filter((element) => {
          return element.region === filterQuery;
        })
      );
    }
  }

  //Function to filter the data based on the name
  function filterDataByName(filterQuery) {
    setCountries(
      countries.filter((element) => {
        return element.name.toLowerCase().includes(filterQuery);
      })
    );
  }

  //Functions to set isindetails
  function showDetails(index) {
    setCountryObj(countries[index]);
    generateCountryCurrencies();
    generateCountryLanguages();
    setIsInDetails(true);
  }

  //This is a function that sets the isInDetails to false which uses react state so the screen will update
  function showHomeScreen() {
    setIsInDetails(false);
  }

  //function to toggle dark mode
  // function toggleDarkMode() {
  //   setIsInDarkMode((prevMode) => !prevMode);
  // }

  return (
    <div>
      <AppBar />
      {!isInDetails && (
        <QueryBar
          callbackForRegion={filterDataByRegion}
          callbackForSearch={filterDataByName}
        />
      )}
      {!isInDetails ? (
        <GridContainer showDetails={showDetails} data={countries} />
      ) : (
        <CountryDetails
          img={countryObj.flags.svg}
          name={countryObj.name}
          nativeName={countryObj.nativeName}
          population={countryObj.population}
          region={countryObj.region}
          subRegion={countryObj.subregion}
          capital={countryObj.capital}
          domain={
            typeof countryObj.topLevelDomain !== "undefined" &&
            countryObj.topLevelDomain.join(" ")
          }
          currencies={countryCurrencies}
          languages={countryLanguages}
          borderCountries={
            typeof countryObj.borders !== "undefined" &&
            countryObj.borders.join(" ")
          }
          goToHome={showHomeScreen}
        />
      )}
    </div>
  );
}

export default App;
