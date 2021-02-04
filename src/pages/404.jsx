import React from 'react';

import textStyles from '../css/text.module.css';
import styles from './styles.module.css';
import Page from '../components/page';

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
