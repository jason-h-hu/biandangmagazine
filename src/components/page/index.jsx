import React from 'react';
import {Image, Container, Row, Col} from 'react-bootstrap'
import {Helmet} from 'react-helmet';

import Header from '../header';
import NavigationButtons from '../navigation_buttons';
import styles from './styles.module.css';
import bands1 from './rubber_bands/rubber_bands_1.svg';
import bands2 from './rubber_bands/rubber_bands_2.svg';
import bands3 from './rubber_bands/rubber_bands_3.svg';
import bands4 from './rubber_bands/rubber_bands_4.svg';
import bands5 from './rubber_bands/rubber_bands_5.svg';
import bands6 from './rubber_bands/rubber_bands_6.svg';

export default function Page({
  title, // string
  nextPost, // url-string
  previousPost, // url-string
  volume, // url-string
  backgroundImage, // gatsby-image
  children, // react component
}) {
  const style = backgroundImage == null ? 
    {} : 
    {backgroundImage: `url("${backgroundImage}")`};

  const rubberBandImages = backgroundImage == null ?
    getRandomBands(2) :
    []; 

  return (
    <Container fluid className={styles.container} style={style}>
      <Helmet><title>{title}</title></Helmet>  
      <Header darkMode={backgroundImage != null} />
      <Row className={styles.fullHeight}>
        <Col lg={3} md={2} className={styles.rubberBands}>
          {
            rubberBandImages[0] == null ? 
              null : 
              <div className={styles.rubberBand} 
                style={{
                  top: `${randomRange(10, 100)}px`, 
                  right: `${randomRange(10, 50)}%`,
                }}>
                <Image src={rubberBandImages[0]} fluid />
              </div>
          }
        </Col>
        <Col className={styles.layout} lg={6} md={8}>
          <div className={styles.page}>{children}</div>
          <NavigationButtons 
            next={nextPost} 
            previous={previousPost} 
            home={volume} 
            darkMode={backgroundImage != null}
          />
          <div className={styles.footer}>© 2021 Bian Dang Zine</div>
        </Col>
        <Col lg={3} md={2} className={styles.rubberBands}>
        {
          rubberBandImages[1] == null ? 
            null : 
            <div className={styles.rubberBand} 
              style={{
                bottom: `${randomRange(-100, 100)}px`, 
                left: `${randomRange(10, 50)}%`,
              }}>
              <Image src={rubberBandImages[1]} fluid />
            </div>
        }
      </Col>
    </Row>
    </Container>
  );
}

function getRandomBands(count=1) {
  let res = []
  const pool = [bands1, bands2, bands3, bands4, bands5, bands6];
  while (count > 0) {
    const randomIndex = Math.floor(pool.length * Math.random());
    res = res.concat(pool.splice(randomIndex, 1));
    count--;
  }
  return res;
}

function randomRange(min, max) {
  const interval = max - min;
  return min + Math.floor(Math.random() * interval);
}