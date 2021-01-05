import '../scss/styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <nav>
        <ul className="nav-lins">
            <Link className="nav-links" to="/">
                <li>HOME</li>
            </Link>
        </ul>
        <h3>Zdeněk Hásek</h3>
        <ul className="nav-links">

            <Link className="nav-links" to="/about">
                <li>About</li>
            </Link>
            <Link className="nav-links" to="/blog">
                <li>Blog</li>
            </Link>
        </ul>
    </nav>
);
