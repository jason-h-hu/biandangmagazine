import React from 'react';
import {Container, Col} from 'react-bootstrap'
import {Helmet} from 'react-helmet';

import Header from '../header';
import NavigationButtons from '../navigation_buttons';
import styles from './styles.module.css';

export default function Page({title, children, nextPost, previousPost, volume}) {
  return (
    <Container fluid className={styles.container}>
      <Helmet><title>{title}</title></Helmet>  
      <Header />
      <Col className={styles.layout}
        lg={{span: 6, offset: 3}}
        md={{span: 8, offset: 2}}
      >
        <div className={styles.page}>{children}</div>
        <NavigationButtons next={nextPost} previous={previousPost} home={volume}/>
      </Col>
      <div className={styles.footer}>© 2021 Bian Dang Magazine</div>
    </Container>
  );
}


