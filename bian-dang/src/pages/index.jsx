import React from 'react';
import {Link} from 'gatsby';
import {Container, Col, Row} from 'react-bootstrap'
import {Helmet} from 'react-helmet';

import HomeGraphic from '../components/home_graphic';
import Header from '../components/header';
import Logotype from '../components/logotype';

import styles from './styles.module.css';

export default function Home() {
  return (
    <Container fluid className={styles.container}>
      <Helmet><title>Bian Dang</title></Helmet>
      <div className={styles.mobileHeader}><Header/></div>
      <Row className={styles.page}>
        <Col lg={3} className={styles.browserHeader}>
          <div className={styles.logotype}><Logotype size="large"/></div>
          <div className={styles.buttons}>
            <div className={styles.button}><Link className={styles.link} to="/about">About</Link></div>
            <div className={styles.button}><Link className={styles.link} to="/contact">Contact</Link></div>
          </div>
        </Col>
        <Col className={styles.homegraphic} lg={9}><HomeGraphic /></Col>
      </Row>
    </Container>
  );
}
