import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import EntryForm from './components/EntryForm';
import Table from './components/Table';
import LandingPage from './views/LandingPage';
import SearchPage from './views/SearchPage';
import ResultsPage from './views/ResultsPage';

function App() {
  const [currentState, setCurrentState] = useState('landing');
  const view = getPage(
    currentState, // arg 1
    () => { setCurrentState('search') },// arg 2
    () => { setCurrentState('results') }
  )
  return (
    <div className="App">
      <Header />
      {/* <button type="button" onClick={() => { setCurrentState('search') }}>DEV: change page</button> */}
      {view}
      {/* {<LandingPage onClickButton={() => { setCurrentState('search') }} />} */}
    </div>
  );
}

export default App;

function getPage(currentState, goToSearchPage, goToResultsPage) {
  debugger;
  if (currentState === 'landing') {
    return <LandingPage onClickButton={() => goToSearchPage()} />
  } else if (currentState === 'search') {
    return <SearchPage onClickButton={() => goToResultsPage()}/>
  } else if (currentState === 'results') {
    return <ResultsPage />
  } else {
    return null;
  }
}