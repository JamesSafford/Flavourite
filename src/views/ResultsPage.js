import React from 'react'
import Table from '../components/Table'
import { Link } from 'react-router-dom';

function ResultsPage() {
  return (
    <div className="ResultPage">
      <Link to="search">
        <button className="button-primary" type="button"> 
        Start over
        </button>
       </Link>
       <Table/>
    </div>
  )
};

export default ResultsPage;
;
