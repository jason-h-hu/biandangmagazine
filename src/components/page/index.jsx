import React from 'react';
import {Image, Container, Row, Col} from 'react-bootstrap'
import {Helmet} from 'react-helmet';

import Header from '../header';
import Footer from '../footer';
import NavigationButtons from '../navigation_buttons';
import styles from './styles.module.css';

import getRandomBands from './rubber_bands';

export default function Page({
  title, // string
  nextPost, // url-string
  previousPost, // url-string
  volume, // url-string
  backgroundImage, // gatsby-image
  fullWidth, // bootstrap
  children, // react component
}) {
  const style = backgroundImage == null ? {} : {backgroundImage: `url("${backgroundImage}")`};
  const rubberBandImages = backgroundImage == null ? getRandomBands(2) : []; 
  return (
    <Container fluid className={styles.container} style={style}>
      <Helmet><title>{title}</title></Helmet>  
      <Header darkMode={backgroundImage != null} />
      <Row className={styles.fullHeight}>
        <Col lg={3} md={2} className={fullWidth ? styles.hidden : styles.rubberBands}>
          {
            rubberBandImages[0] == null ? 
              null : 
              <div className={styles.rubberBand} 
                style={{
                  top: randomRange({min: 10, max: 100, unit: 'px'}),
                  right: randomRange({min: 10, max: 50, unit: '%'}),
                }}>
                <Image src={rubberBandImages[0]} fluid />
              </div>
          }
        </Col>
        <Col className={styles.layout} lg={fullWidth ? 12 : 6} md={fullWidth ? 12 : 8}>
          <div className={fullWidth ? styles.fullPage : styles.page}>{children}</div>
          <NavigationButtons 
            next={nextPost} 
            previous={previousPost} 
            home={volume} 
            darkMode={backgroundImage != null}
          />
          <Footer/>
        </Col>
        <Col lg={3} md={2} className={fullWidth ? styles.hidden : styles.rubberBands}>
        {
          rubberBandImages[1] == null ? 
            null : 
            <div className={styles.rubberBand} 
              style={{
                bottom: randomRange({min: -100, max: 100, unit: 'px'}), 
                left: randomRange({min: 10, max: 50, unit: '%'}),
              }}>
              <Image src={rubberBandImages[1]} fluid />
            </div>
          }
        </Col>
      </Row>
    </Container>
  );
}

function randomRange({min=0, max=10, unit='px'}) {
  const interval = max - min;
  const delta = min + Math.floor(Math.random() * interval);
  return `${delta}${unit}`
}