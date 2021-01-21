import '../scss/styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <nav className="navbar is-white" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link className="navbar-item" to="/">
                ZDENĚK HÁSEK
            </Link>
        </div>

        <div id="navbar" className="navbar-menu">
            <div className="navbar-end">
                <Link className="navbar-item" to="/blog">
                    BLOG
                </Link>

                <Link className="navbar-item" to="/about">
                    ABOUT
                </Link>
            </div>
        </div>
    </nav>
);
