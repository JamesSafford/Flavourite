import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LandingPage from './views/LandingPage';
import ResultsPage from './views/ResultsPage';
import SearchPage from './views/SearchPage';

function App() {
    return (
        <Router>
        <div className="AppTest">
            <Header />
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
