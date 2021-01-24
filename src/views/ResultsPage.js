import React, { useContext, useEffect, useState } from 'react'
import Table from '../components/Table'
import { useLocation } from 'react-router-dom'
import { useCounter } from '../hooks/useCounter';
import { SearchContext } from '../context';
import fetchApi from '../utils/fetchApi';

async function fetchResults(ingredient1, ingredient2) {
  const response = await fetchApi(`/results?ingredient1=${ingredient1}&ingredient2=${ingredient2}`)
  if (!response.ok) {
    throw new Error('Failed to load results');
  }
  const results = await response.json();
  return results;
}

function ResultsPage() {
  const [error, setError] = useState();
  const [results, setResults] = useState();
  const [refetchCounter, incrementRefetchCounter] = useCounter();

  const location = useLocation();
  const searchContext = useContext(SearchContext);
  const { clear: clearSearch } = searchContext;

  const { ingredient1, ingredient2 } = location.state;

  useEffect(() => {
    setResults(undefined);
    setError(undefined);
    loadResults();

    async function loadResults() {
      try {
        const results = await fetchResults(ingredient1, ingredient2);
        setResults(results);
        clearSearch();
      } catch (e) {
        setError(e);
      }
    }
  }, [ingredient1, ingredient2, refetchCounter, clearSearch]);

  return (
    <div className="ResultPage">
   {/*  <button className="button-primary" type="button" onClick={incrementRefetchCounter}>
        Reload results
    </button> */}
      {results
        ? <Table rows={results} label="hi"/>
        : error
        ? `Could not retrieve recipes: ${error.message}`
        : 'Loading...'}
    </div>
  )
};

export default ResultsPage;
