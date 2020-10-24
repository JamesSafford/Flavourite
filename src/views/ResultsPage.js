import React, { useEffect, useState } from 'react'
import Table from '../components/Table'
import { Link } from 'react-router-dom'

async function fetchResults() {
  const response = await fetch('http://localhost:3001/api/results')
  if (!response.ok) {
    throw new Error('Failed to load results');
  }
  const results = await response.json();
  return results;
}

function ResultsPage() {
  const [error, setError] = useState();
  const [results, setResults] = useState();
  useEffect(() => {
    showResults();

    async function showResults() {
      try {
        const results = await fetchResults();
        setResults(results);
      } catch (e) {
        setError(e);
      }
    }
  }, []);

  return (
    <div className="ResultPage">
      <Link to="search">
        <button className="button-primary" type="button">
        Start over
        </button>
      </Link>
      {results
        ? <Table rows={results} label="hi"/>
        : error
        ? `Could not retrieve recipes: ${error.message}`
        : 'Loading...'}
    </div>
  )
};

export default ResultsPage;
