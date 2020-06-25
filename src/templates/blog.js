import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/Layout/index';

export const query = graphql`
    query($slug: String) {
        contentfulArticle(slug: {eq: $slug}) {
            title
            publishedAt(formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }
`

const Blog = (props) => {
    return(
        <Layout>
            <h1>{props.data.contentfulArticle.title}</h1>
            <p>{props.data.contentfulArticle.publishedAt}</p>
            {documentToReactComponents(props.data.contentfulArticle.body.json)}
        </Layout>
    )
}

export default Blog
