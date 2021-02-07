import React from 'react';
import {Image} from 'react-bootstrap'
import {Helmet} from 'react-helmet';

import textStyles from '../../css/text.module.css';
import Header from '../header';
import Footer from '../footer';
import NavigationButtons from '../navigation_buttons';
import styles from './styles.module.css';
import RubberBands, {getRandomBands} from './rubber_bands';

export default function Page({
  title, // string
  nextPost, // url-string
  previousPost, // url-string
  volume, // url-string
  bannerPhoto, // {url, credit}
  backgroundImage, // gatsby-image
  fullWidth, // boolean
  children, // react component
}) {
  const style = backgroundImage == null ? {} : {backgroundImage: `url("${backgroundImage}")`};
  const rubberBandImages = backgroundImage == null ? getRandomBands(2) : []; 
  return (
    <div className={styles.container} style={style}>
      <Helmet><title>{title}</title></Helmet>
      <BannerPhoto bannerPhoto={bannerPhoto} />
      <div className={bannerPhoto != null ? styles.floatingHeader : null}>
        <Header darkMode={backgroundImage != null || bannerPhoto != null} />
      </div>
      <div className={styles.viewport}>
        {
          fullWidth 
            ? null 
            : <RubberBands image={rubberBandImages[0]} top={randomRange(10, 100, 'px')} right={randomRange(10, 25, '%')}/>
        }
        <div className={fullWidth ? styles.fullLayout : styles.layout}>
          <div className={styles.page}>{children}</div>
          <div className={styles.stickyFooter}>
            <NavigationButtons 
              next={nextPost} 
              previous={previousPost}
              home={volume} 
              darkMode={backgroundImage != null}
            />
            <Footer darkMode={backgroundImage != null}/>
          </div>
        </div>
        {
          fullWidth 
            ? null 
            : <RubberBands image={rubberBandImages[1]} bottom={randomRange(-100, 100, 'px')} left={randomRange(10, 50, '%')}/>
        }
      </div>
    </div>
  );
}

function randomRange(min=0, max=10, unit='px') {
  const interval = max - min;
  const delta = min + Math.floor(Math.random() * interval);
  return `${delta}${unit}`
}

function BannerPhoto ({bannerPhoto}) {
  if (bannerPhoto == null) return null;
  const {url, credit} = bannerPhoto;
  return (
    <div className={styles.bannerPhoto}>
      <Image src={url} fluid/>
      <div className={styles.bannerCaption}>
        <div className={textStyles.captionText}>Photo by {credit}</div>
      </div>
    </div>      
  );
}