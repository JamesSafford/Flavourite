import React from 'react';
import { Link } from "react-router-dom";



function SearchPage() {
  return (
    <div class="topnav" className="EntryForm">
      <a>Ingredient One</a>
      <input type="text" placeholder="Search..." className="p"></input>
      <a>Ingredient Two</a>
      <input type="text" placeholder="Search..." className="p"></input>
      <Link to="results">
      <button class="favorite styled" type="button">
      Search</button>
      </Link> 
    </div>
  );
}


/* function SearchPage(props) {
  return (
    <div class="topnav" className="EntryForm">
      <a>Ingredient One</a>
      <input type="text" placeholder="Search..." className="p"></input>
      <a>Ingredient Two</a>
      <input type="text" placeholder="Search..." className="p"></input>
      <button class="favorite styled"
        type="button" onClick={props.onClickButton}>
      Search</button> 
    </div>
  );
}
*/
export default SearchPage;
