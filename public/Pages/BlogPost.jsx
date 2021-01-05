// import React, { useState, useEffect } from 'react';

// import { posts } from '../../dist/content.json';

// export default ({ match }) => {

//     useEffect(() => {
//         console.log(match);

//         const [contentHtml] = posts;

//     }, [match]);

//     return (
//         <>
//             <h1>{`This is Blog ABOUT:${match.params.id}`}</h1>
//             <div
//                 className="content"
//                 dangerouslySetInnerHTML={{ __html: contentHtml }}
//             />
//         </>
//     );
// };
