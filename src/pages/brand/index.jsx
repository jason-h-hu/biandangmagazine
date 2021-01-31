import React from 'react';

import Page from '../../components/page';
// import Profile from '../../components/profile';
// import textStyles from '../../css/text.module.css';
// import styles from './styles.module.css';

import brandPdf from './bian-dang-brand-book-final.pdf';

export default function Brand() {

  return (
    <Page title="The Brand" fullWidth={true}>
      <object 
        data={brandPdf} 
        type="application/pdf" 
        width="100%" height="800px"
      >
        {/* <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p> */}
      </object>
    </Page>
  );
}
