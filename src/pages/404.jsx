import React from 'react';
import {Image} from 'react-bootstrap'
import {Helmet} from 'react-helmet';

import Header from '../components/header';

import textStyles from '../css/text.module.css';
import styles from './styles.module.css';
import Page from '../components/page';
import emptyImage from './empty.png';

export default function NotFound() {
  return (
    <Page title="Not Found" >
      <div className={styles.xlargeView}><span className={textStyles.headerLg}>Page not found</span></div>
      <div className={styles.largeView}><span className={textStyles.headerLg}>Page not found</span></div>
      <div className={styles.mediumView}><span className={textStyles.headerLg}>Page not found</span></div>
      <div className={styles.smallView}><span className={textStyles.headerLg}>Page not found</span></div>
   </Page>
  );
}
