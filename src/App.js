import React from 'react';
import './App.css';
import Header from './components/Header';
import EntryForm from './components/EntryForm';
import Table from './components/Table';




function App() {
  return (
    <div className="App">
      <Header />
      <EntryForm />
      <Table />
    </div>
  );
}

export default App;