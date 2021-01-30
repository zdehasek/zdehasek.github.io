import React from 'react';
import { Link } from 'react-router-dom';

import postsInfo from '../../dist/postsInfo.json';

export default () => (

    <>
        <h2>Blog</h2>

        <aside className="menu">
            <p className="menu-label">
                General
            </p>
            <ul className="menu-list">
                {postsInfo.map((post) => (
                    <li key={post.id}>
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}

            </ul>
        </aside>

    </>

);
