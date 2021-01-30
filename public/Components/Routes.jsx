import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Home from '../Pages/Home';
import BlogPost from '../Pages/BlogPost';
import NotFound from '../Pages/NotFound';

// blog posts
// import Money, { meta } from '../../posts/Money.mdx';

export default function Routes () {

    return (

        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" exact component={Blog} />
            {/* <Route path={`/blog/${meta.url}`} component={Money} /> */}
            <Route path="/blog/:id" component={BlogPost} />
            <Route path="*" component={NotFound} />
        </Switch>

    );
}
