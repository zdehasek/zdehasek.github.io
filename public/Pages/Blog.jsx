/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { Remarkable } from 'remarkable';
import { Link } from 'react-router-dom';

import { webalize } from 'webalize';

import postsInfo from '../../dist/postsInfo.json';

const md = new Remarkable();

export default () => {

    // useEffect(() => {
    //     const HL = md.render('## This is also Blog');
    //     console.log(HL);

    // }, []);

    const getMD = () => ({ __html: md.render('## This is also Blog') });

    return (

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
};
