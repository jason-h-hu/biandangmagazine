import React from 'react';

import Page from '../../components/page';
import textStyles from '../../css/text.module.css';
import styles from './styles.module.css';
import brandPdf from './bian-dang-brand-book.pdf';

export default function Brand() {

  return (
    <Page title="The Brand" fullWidth={true}>
      <object data={brandPdf} type="application/pdf" width="100%" height="800px">
        <div className={styles.header}><div className={textStyles.headerLg}>Couldn’t open the brand book PDF.</div></div>
        <div className={styles.header}><div className={textStyles.headerLg}><a href={brandPdf} download>Download it here</a></div></div>
      </object>
    </Page>
  );
}
