/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import posts from '../../dist/postsData.json';

function blogPost ({ match }) {

    const { params: { id } } = match;
    const { contentHtml } = posts.find((post) => post.id === id);

    // console.log('ssll', contentHtml);

    // useEffect(() => {
    //     console.log(id);
    //     console.log(contentHtml);

    // }, [match]);

    return (
        <>
            <h1>{`This is Blog ABOUT:${match.params.id}`}</h1>
            <div
                className="content"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
        </>
    );
}

blogPost.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    })
};

export default blogPost;
