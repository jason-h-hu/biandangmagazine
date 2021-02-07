import React from 'react';
import {Image} from 'react-bootstrap'
import {Helmet} from 'react-helmet';

import Header from '../header';
import Footer from '../footer';
import NavigationButtons from '../navigation_buttons';
import styles from './styles.module.css';

import textStyles from '../../css/text.module.css';
import getRandomBands from './rubber_bands';

export default function Page({
  title, // string
  nextPost, // url-string
  previousPost, // url-string
  volume, // url-string
  bannerPhoto, // {url, credit}
  backgroundImage, // gatsby-image
  fullWidth, // bootstrap
  children, // react component
}) {
  const style = backgroundImage == null ? {} : {backgroundImage: `url("${backgroundImage}")`};
  const rubberBandImages = backgroundImage == null ? getRandomBands(2) : []; 
  return (
    <div className={styles.container} style={style}>
      <Helmet><title>{title}</title></Helmet>  
      {
        bannerPhoto == null
          ? null
          : <div className={styles.bannerPhoto}>
              <Image src={bannerPhoto.url} fluid/>
              <div className={styles.bannerCaption}>
                <div className={textStyles.captionText}>Photo by {bannerPhoto.credit}</div>
              </div>
            </div>
      }
      <div className={bannerPhoto != null ? styles.floatingHeader : null}>
        <Header darkMode={backgroundImage != null || bannerPhoto != null} />
      </div>
      <div className={styles.viewport}>
        <div className={fullWidth ? styles.hidden : styles.rubberBands}>
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
        </div>
        <div className={styles.layout}>
          <div className={fullWidth ? styles.fullPage : styles.page}>{children}</div>
          <div className={styles.stickyFooter}>
            <NavigationButtons 
              next={nextPost} 
              previous={previousPost} 
              home={volume} 
              darkMode={backgroundImage != null}
            />
            <Footer/>
          </div>
        </div>
        <div className={fullWidth ? styles.hidden : styles.rubberBands}>
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
        </div>
      </div>
    </div>
  );
}

function randomRange({min=0, max=10, unit='px'}) {
  const interval = max - min;
  const delta = min + Math.floor(Math.random() * interval);
  return `${delta}${unit}`
}