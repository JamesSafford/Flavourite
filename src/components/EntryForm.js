import React from 'react';

function EntryForm() {
    return (
      <div  class="topnav">
      <a>Ingredient One</a>
      <input type="text" placeholder="Search..."></input>
      <a>Ingredient Two</a>
      <input type="text" placeholder="Search..."></input>
      <button class="favorite styled"
        type="button">
      Search</button> 
      </div>
    );
}

export default EntryForm;
