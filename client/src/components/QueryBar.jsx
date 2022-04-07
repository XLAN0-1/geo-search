import React from "react";
import DropDownMenu from "./DropDownMenu";
import SearchBar from "./SearchBar";
import "../App.css";


function QueryBar(props){

    return (
    <div className="query-bar">
        <SearchBar callback={props.callbackForSearch} className="query-search-bar"/>
        <DropDownMenu className="query-drop-down-menu" callback={props.callbackForRegion}/>
    </div>)

}


export default QueryBar;