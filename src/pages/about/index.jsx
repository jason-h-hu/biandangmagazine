import React from 'react';

import Page from '../../components/page';
import textStyles from '../../css/text.module.css';
import styles from './styles.module.css';

export default function About() {
  return (
    <Page title="About">
      <div className={styles.section}>
        <div className={styles.header}><span className={textStyles.headerLg}>About Us</span></div>
        <div className={textStyles.bodyText}>
          <p>We’ve always wanted to create something that evoked a sense of home. To us, Taiwanese food is more than just a series of dishes; it’s a walking tour tasting menu of memories. Mornings hurrying past a corner food stall, a sip of comfort while growing through life stages, a common thread between mom and daughter, or a porcelain bowl cradling soupy noodles.</p>
          <p>便當 (<em>bian dang</em>) are takeout lunch boxes, paper sandwich trays stuffed with side dishes, and they parallel our fragmented Taiwanese-American identities. Thanks for stopping by and sampling a morsel of our favorite moments, bundled together into one familiar lunch box.</p>
          <p>開飯</p>
        </div>
      </div>
    </Page>
  );
}
