/* eslint-disable react/no-danger */
import React, { useState, useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';

import NotFound from './NotFound';

import postsInfo from '../../dist/postsInfo.json';

function blogPost ({ match }) {

    const { params: { id } } = match;

    let Article;
    const { title } = postsInfo.find((p) => p.id === id) || {};

    if (title) {
        Article = React.lazy(() => import(`../../posts/${title}.mdx`));
    }

    // useEffect(() => {
    //     console.log(id);
    //     console.log(contentHtml);

    // }, [match]);

    return (
        <>
            <h1>{`This is Blog ABOUT:${id}`}</h1>
            <Suspense fallback={<div>Loading...</div>}>
                {Article ? <Article /> : <NotFound />}
            </Suspense>
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
