import React from 'react';
import './App.css';
import Header from './components/Header';
import EntryForm from './components/EntryForm';
import Table from './components/Table';
import LandingPage from './views/LandingPage';
import SearchPage from './views/SearchPage';
import ResultsPage from './views/ResultsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
        <div className="AppTest">
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/results" component={ResultsPage} />
            </Switch>
        </div>
        </Router>
    )
    };


export default App;