import React from 'react';
import Select from 'react-select';
import Button from './Button';
import './Search.css';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

function Search(){
    return (
      <form className="Search">
        <Select isMulti className="Search-bar" classNamePrefix="Search-bar" options={options} />
        <Button className="Search-button">Search</Button>
      </form>

    )

}
export default Search;


