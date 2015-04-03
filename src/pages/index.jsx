import React from 'react';
import {Link} from 'gatsby';
import {Helmet} from 'react-helmet';

import HomeGraphic from '../components/home_graphic';
import HomeList from '../components/home_list';
import Header from '../components/header';
import Logotype from '../components/logotype';

import styles from './styles.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Helmet><title>Bian Dang</title></Helmet>
      <div className={styles.xlargeView}>
        <div className={styles.desktopHeader}>
          <div className={styles.logotype}><Logotype size="xlarge"/></div>
          {renderButtons()}
        </div>
        <div className={styles.desktopHome}><HomeGraphic /></div>
      </div>
      <div className={styles.largeView}>
        <div className={styles.desktopHeader}>
          <div className={styles.logotype}><Logotype size="large"/></div>
          {renderButtons()}
        </div>
        <div className={styles.desktopHome}><HomeGraphic /></div>
      </div>
      <div className={styles.mediumView}>
        <div className={styles.compactHeader}><Header/></div>
        <div className={styles.desktopHome}><HomeGraphic/></div>
      </div>
      <div className={styles.smallView}>
        <div className={styles.compactHeader}><Header/></div>
        <div><HomeList /></div>
      </div>
    </div>
  );
}

function renderButtons () {
  return (
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
  );
}