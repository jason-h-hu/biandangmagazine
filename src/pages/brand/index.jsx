import React from 'react';

import Page from '../../components/page';
import Button from '../../components/button';
import textStyles from '../../css/text.module.css';
import styles from './styles.module.css';
import brandPdf from './bian-dang-brand-book.pdf';

export default function Brand() {

  // NOTE: Mobile Safari cannot reliably embed PDFs, so the current
  // workaround is to link to the PDF in mobile, and embed it in desktop.
  // This means having one view for mobile and one for desktop, and 
  // using a JANKY CSS @media selector to differentiate them.
  return (
    <Page title="The Brand" fullWidth={true}>
      <div className={styles.mobileView}>
        <div className={styles.mobileHeader}><div className={textStyles.headerLg}>We wanted to document our design process.</div></div>
        <Button size="lg" href={brandPdf}>Check it out</Button>
      </div>
      <div className={styles.desktopView}>
        <object data={brandPdf} type="application/pdf" width="100%" height="800px">
          <div className={styles.header}><div className={textStyles.headerLg}>Couldn’t open the brand book PDF.</div></div>
          <div className={styles.header}><div className={textStyles.headerLg}><a href={brandPdf}>Download it here</a></div></div>
        </object>
      </div>
    </Page>
  );
}
