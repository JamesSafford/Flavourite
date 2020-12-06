import React, { useEffect, useState } from 'react'
import Table from '../components/Table'
import { Link, useLocation } from 'react-router-dom'
import { useCounter } from '../hooks/useCounter';

async function fetchResults(ingredient1, ingredient2) {
  const response = await fetch(`http://localhost:3001/api/results?ingredient1=${ingredient1}&ingredient2=${ingredient2}`)
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

  const { ingredient1, ingredient2 } = location.state;

  useEffect(() => {
    setResults(undefined);
    setError(undefined);
    loadResults();

    async function loadResults() {
      try {
        const results = await fetchResults(ingredient1, ingredient2);
        setResults(results);
      } catch (e) {
        setError(e);
      }
    }
  }, [ingredient1, ingredient2, refetchCounter]);

  return (
    <div className="ResultPage">
      <Link to="search">
        <button className="button-primary" type="button">
        Start over
        </button>
      </Link>
      <button className="button-primary" type="button" onClick={incrementRefetchCounter}>
        Reload results
      </button>
      {results
        ? <Table rows={results} label="hi"/>
        : error
        ? `Could not retrieve recipes: ${error.message}`
        : 'Loading...'}
    </div>
  )
};

export default ResultsPage;
