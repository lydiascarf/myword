import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { GamePage, JoinPage } from './components';

import './App.css';

function App() {
    return (
        <Router>
            <Route path='/' exact component={JoinPage} />
            <Route path='/game' exact component={GamePage} />
        </Router>
    );
}

export default App;
