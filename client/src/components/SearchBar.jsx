import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



function SearchBar(props) {
  const [seachText, setSearchText] = React.useState("");

  //Function to handle the input change
  function inputChangeListener(){
    var query = document.querySelector(".search-input").value.toLowerCase();
    props.callback(query);
  }


  return (
    <div className="search-bar">
        <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        <input onChange={inputChangeListener} className="search-input" placeholder="Search for a Country..." type="text" ></input>
    </div>
  );
}

export default SearchBar;
