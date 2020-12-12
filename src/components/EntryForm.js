import React from 'react'
import { BeatLoader, BarLoader } from 'react-spinners'
import './EntryForm.css'


function EntryForm() {
  return (
    <div className='Spinner'>
      <BeatLoader />
      <BarLoader />
    </div>
  )

   /* return (
      <div class="topnav" className="EntryForm">
      <a>Ingredient One</a>
      <input type="text" placeholder="Search..." class="p"></input>
      <a>Ingredient Two</a>
      <input type="text" placeholder="Search..." class="p"></input>
      <button class="favorite styled"
        type="button">
      Search</button> 
      </div>
    ); */
}

export default EntryForm;
