import React from 'react';
import { gatsby, useStaticQuery, Link, graphql } from 'gatsby';
import Layout from '../components/Layout/index';
import BlogCard from '../components/BlogCard';

import styles from './blog.module.scss';


const Blog = () => {
    const articles = useStaticQuery(
        graphql`
            query {
                allContentfulArticle (
                    sort: {
                        fields: publishedAt
                        order: DESC
                    }
                ) {
                    edges {
                        node {
                            id
                            title
                            text {
                                text
                            }
                            banner {
                                file {
                                    url
                                }
                            }
                            slug
                            publishedAt(formatString: "MMM Do, YYYY")
                        }
                    }
                }
            }
        `
    )
    return (
        <Layout>
            <h1>Hello, i am blog</h1>
            <h2>Recently Posts</h2>
            {articles.allContentfulArticle.edges.map((articleData) => {
                const { id, title, text, banner, slug, publishedAt} = articleData.node
                console.log(articleData, title, publishedAt)
                return <Link to={`/blog/${slug}`} className={styles.blogCardLink}>
                    <BlogCard
                        dateShort={publishedAt}
                        introText='It is intro text'
                        heading={title}
                        />    
                </Link>
            })}
        </Layout>
    )
}

export default Blog;