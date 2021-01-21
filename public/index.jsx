import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './app';

function Main () {

    return (
        <Router basename="/">
            <App />
        </Router>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));
