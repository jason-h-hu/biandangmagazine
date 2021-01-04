import React from 'react';
import {Container, Col} from 'react-bootstrap'
import {Helmet} from 'react-helmet';

import HomeGraphic from '../components/home_graphic';
import Logotype from '../components/logotype';

import styles from './styles.module.css';

export default function Home() {
  return (
    <Container fluid className={styles.container}>
      <Helmet><title>Bian Dang</title></Helmet>
      <div className={styles.layout}>
        <div className={styles.page}>
          <div className={styles.logotype}>
            <div className={styles.logotypeLarge}><Logotype size="large"/></div>
            <div className={styles.logotypeMedium}><Logotype size="medium"/></div>
          </div>
        </div>
        <HomeGraphic />
      </div>
    </Container>
  );
}
