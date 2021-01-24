import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import Button from './Button';
import { useCounter } from '../hooks/useCounter';
import { SearchContext } from '../context';
import fetchApi from '../utils/fetchApi';
import './Search.css';

async function fetchOptions() {
  const response = await fetchApi(`/search-terms`)
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
  const searchContext = useContext(SearchContext);

  const button = useRef();

  useEffect(() => {
    loadSearchTerms();

    async function loadSearchTerms() {
      try {
        const searchTerms = await fetchOptions(refetchCounter);
        const options = searchTerms.map(({ id, label }) => ({ value: id, label }));
        setOptions(options);
      } catch {
        if (refetchCounter < 5) incrementRefetchCounter();
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

  const buttonElement = button.current;
  const onChangeSelection = useCallback((items) => {
    const selection = (items || []).slice(0, 2);
    setSelectedItems(selection);
    if (selection.length === 2) {
      if (buttonElement) {
        buttonElement.disabled = false;
        buttonElement.focus();
      }
    }
  }, [buttonElement]);

  const clearResults = useCallback(() => {
    onChangeSelection(null);
  }, [onChangeSelection]);

  searchContext.clear = clearResults;

    return (
      <form className="Search" onSubmit={onSubmit}>
        <Select
          className="Search-bar"
          classNamePrefix="Search-bar"
          placeholder="Type ingredients here..."
          isMulti
          options={selectedItems.length < 2 ? options : undefined}
          value={selectedItems}
          onChange={onChangeSelection}
        />
        <Button
          ref={button}
          className="Search-button"
          type="submit"
          disabled={selectedItems.length < 2}
        >Search</Button>
      </form>
    )



}
export default Search;


