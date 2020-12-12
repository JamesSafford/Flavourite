import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LandingPage from './views/LandingPage';
import ResultsPage from './views/ResultsPage';
import { SearchContext } from './context';

const searchContext = {
    clear: () => {
        throw new Error('Search not yet enabled');
    },
};

function App() {
    return (
        <Router>
            <SearchContext.Provider value={searchContext}>
                <div className="AppTest">
                    <Header />
                    <Switch>
                        <Route path="/" exact component={LandingPage} />
                        <Route path="/results" component={ResultsPage} />
                    </Switch>
                </div>
            </SearchContext.Provider>
        </Router>
    )
    };


export default App;
