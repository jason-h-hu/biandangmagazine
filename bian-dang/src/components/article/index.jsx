import { graphql } from "gatsby";
import React from 'react';
import {Helmet} from 'react-helmet';

import Layout from '../layout';

export default function Article({data}) {
  const post = data.markdownRemark
  return (
    <Layout>
      <Helmet><title>{post.frontmatter.title}</title></Helmet>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h4>by {post.frontmatter.author}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        author
      }
    }
  }
`