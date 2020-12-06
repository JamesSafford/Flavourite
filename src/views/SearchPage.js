import React, { useState } from 'react';
import { useHistory } from "react-router-dom";



function SearchPage() {
  // const [ingredient1, setIngredient1] = useState('');x
  // const [ingredient2, setIngredient2] = useState('');
  const history = useHistory();
  return (
    <form className="EntryForm" onSubmit={(event) => {
      event.preventDefault();
      const formElement = event.currentTarget;
      const ingredient1 = formElement.elements.ingredient1.value;
      const ingredient2 = formElement.elements.ingredient2.value;
      const params = {
        ingredient1: ingredient1,
        ingredient2: ingredient2,
      };
      history.push('/results', params);
    }}>
      <a>Ingredient One</a>
      <input name="ingredient1" type="text" placeholder="Search..." className="p"></input>
      <a>Ingredient Two</a>
      <input name="ingredient2" type="text" placeholder="Search..." className="p"></input>
      <button type="submit">Search</button>
      {/* <Link to={{
        pathname: "/results",
        searchterm1: "/",
        searchterm2: ""}}>
      </Link>  */}
    </form>
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
