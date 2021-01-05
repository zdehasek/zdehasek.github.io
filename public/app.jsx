import './scss/styles.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './Components/Footer';
import Nav from './Components/Nav';

import About from './Pages/About';
import Blog from './Pages/Blog';
import Home from './Pages/Home';
import BlogPost from './Pages/BlogPost';
import NotFound from './Pages/NotFound';

export default function App () {

    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/blog/:id" component={BlogPost} />
                    <Route path="*" component={NotFound} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}
