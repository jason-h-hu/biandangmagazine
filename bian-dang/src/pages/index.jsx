import React from 'react';
import {graphql, Link} from 'gatsby';
import {Helmet} from 'react-helmet';

import Layout from '../components/layout';

export default function Home({data}) {
  return (
    <Layout>
      <Helmet><title>Bian Dang</title></Helmet>
      <div>
        {
          data.allMarkdownRemark.edges.map(({node}) => 
            <div key={node.id}>
              <Link to={node.fields.path}>
                <h4>{node.frontmatter.title}</h4>
              </Link>
            </div>
          )
        }
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            path
          }
          excerpt
        }
      }
    }
  }
`