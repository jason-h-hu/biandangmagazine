import React from 'react';
import {Link} from 'gatsby';
import {Container, Col, Row} from 'react-bootstrap'
import {Helmet} from 'react-helmet';

import HomeGraphic from '../components/home_graphic';
import HomeList from '../components/home_list';
import Header from '../components/header';
import Logotype from '../components/logotype';

import styles from './styles.module.css';

export default function Home() {
  return (
    <Container fluid className={styles.container}>
      <Helmet><title>Bian Dang</title></Helmet>
      <Row className={styles.largeView}>
        <Col lg={3} className={styles.desktopHeader}>
          <div className={styles.logotype}><Logotype size="large"/></div>
          <div className={styles.buttons}>
            {
              [
                {link: "/about", text: 'About'},
                {link: "/team", text: 'The Team'},
                {link: "/brand", text: 'The Brand'},
              ].map(({link, text}, i) => 
                <div className={styles.button} key={i}>
                  <Link className={styles.link} to={link}>{text}</Link>
                </div>
              )
            }
          </div>
        </Col>
        <Col className={styles.desktopHome} lg={8}><HomeGraphic /></Col>
      </Row>
      <Row className={styles.mediumView}>
        <Col xs={12}><Header/></Col>
        <Col xs={12}><HomeGraphic/></Col>
      </Row>
      <Row className={styles.smallView}>
        <Col xs={12}><Header/></Col>
        <Col xs={12}><HomeList /></Col>
      </Row>
    </Container>
  );
}
