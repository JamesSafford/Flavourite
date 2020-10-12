import React from 'react'
import Table from '../components/Table'
import { Link } from 'react-router-dom';

function ResultsPage() {
  const results = [
    {
      name: 'The Four Horsemen',
      location: 'Brooklyn, NYC',
      recipe: 'Pork bahn mi, chicken liver mousse, pickled daikon, cilantro, anchovy',
    },

    {
      name: '108',
      location: 'Copenhagen, Denmark',
      recipe: 'Glazed pork chop, berries, anchovy, spices',
    }
  ]

  return (
    <div className="ResultPage">
      <Link to="search">
        <button className="button-primary" type="button"> 
        Start over
        </button>
      </Link>
      <Table rows={results} label="hi"/>
    </div>
  )
};

export default ResultsPage;