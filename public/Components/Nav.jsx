import '../scss/styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <nav>
        <ul className="nav-links">
            <Link className="nav-links" to="/">
                <li>ZDE HASEK</li>
            </Link>
        </ul>

        <ul className="nav-links">
            <Link className="nav-links" to="/blog">
                <li>Blog</li>
            </Link>

            <Link className="nav-links" to="/about">
                <li>About</li>
            </Link>

        </ul>
    </nav>
);
