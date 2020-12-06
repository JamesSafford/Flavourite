import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import Button from './Button';
import { useCounter } from '../hooks/useCounter';
import './Search.css';

async function fetchOptions() {
  const response = await fetch(`http://localhost:3001/api/search-terms/`)
  if (!response.ok) {
    throw new Error('Failed to load results');
  }
  const results = await response.json();
  return results;
}

function Search(){
  const [options, setOptions] = useState();
  const [selectedItems, setSelectedItems] = useState([]);
  const [refetchCounter, incrementRefetchCounter] = useCounter();
  const history = useHistory();

  useEffect(() => {
    loadSearchTerms();

    async function loadSearchTerms() {
      try {
        const options = await fetchOptions(refetchCounter);
        setOptions(options);
      } catch {
        incrementRefetchCounter();
      }
    }
  }, [refetchCounter, incrementRefetchCounter]);

  const onSubmit = useCallback((event) => {
    event.preventDefault();
    const [ingredient1, ingredient2] = selectedItems;
    history.push('/results', {
      ingredient1: ingredient1.value,
      ingredient2: ingredient2.value,
    });
  }, [history, selectedItems]);

  const onChangeSelection = useCallback((selectedItems) => {
    setSelectedItems(selectedItems);
  }, []);

    return (
      <form className="Search" onSubmit={onSubmit}>
        <Select
          className="Search-bar"
          classNamePrefix="Search-bar"
          placeholder="Type ingredients here..."
          isMulti
          options={options}
          onChange={onChangeSelection}
        />
        <Button className="Search-button" type="submit">Search</Button>
      </form>
    )



}
export default Search;


