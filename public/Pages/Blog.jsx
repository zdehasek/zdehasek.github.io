/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { Remarkable } from 'remarkable';
import { Link } from 'react-router-dom';

import { posts } from '../../dist/content.json';

const md = new Remarkable();

export default () => {

    // useEffect(() => {
    //     const HL = md.render('## This is also Blog');
    //     console.log(HL);

    // }, []);

    const getMD = () => ({ __html: md.render('## This is also Blog') });

    return (
        <>
            <h1>This is Blog</h1>
            <div
                className="content"
                dangerouslySetInnerHTML={getMD()}
            />

            {posts.map((post) => (
                <h2 key={post.id}>
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
            ))}

        </>
    );
};
