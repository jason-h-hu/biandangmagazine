import {Container, Row, Col} from 'react-bootstrap'
import React from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'gatsby';

export default function Layout({title, children}) {
  return <Container> 
    <Helmet>
      <meta charSet='utf-8'/>
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
    </Helmet>
    <Row><Link to="/">Home</Link></Row>
    <Row>{children}</Row>
  </Container>
}
