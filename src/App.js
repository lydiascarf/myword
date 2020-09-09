import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import awsconfig from './aws-exports';
import { GamePage, JoinPage } from './components';

Amplify.configure(awsconfig);

function App() {
    return (
        <Router>
            <Route path='/' exact component={JoinPage} />
            <Route path='/game' exact component={GamePage} />
        </Router>
    );
}

export default withAuthenticator(App);
