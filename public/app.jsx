import React from 'react';

import Routes from './Components/Routes';
import Footer from './Components/Footer';
import Nav from './Components/Nav';

export default function App () {

    return (
        <div className="App">
            <Nav />
            <Routes />
            <Footer />
        </div>
    );
}
