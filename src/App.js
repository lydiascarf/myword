import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { GamePage, JoinPage } from './components';

function App() {
    return (
        <Router>
            <Route path='/' exact component={JoinPage} />
            <Route path='/game' exact component={GamePage} />
        </Router>
    );
}

export default App;
