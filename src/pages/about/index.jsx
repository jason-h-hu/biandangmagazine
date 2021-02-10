import React from 'react';

import Page from '../../components/page';
import textStyles from '../../css/text.module.css';
import styles from './styles.module.css';

export default function About() {
  return (
    <Page title="About">
      <div className={styles.section}>
        <div className={styles.header}><span className={textStyles.headerLg}>About</span></div>
        <div className={textStyles.bodyText}>
          <p>We’ve always wanted to create something that evoked a sense of home. To us, Taiwanese food is more than just a series of dishes; it’s a walking tour tasting menu of memories. Mornings hurrying past a corner food stall, a sip of comfort while growing through life stages, a common thread between mom and daughter, or a porcelain bowl cradling soupy noodles.</p>
          <p>便當 (<em>bian dang</em>) are takeout lunch boxes, paper sandwich trays stuffed with side dishes, and they parallel our fragmented Taiwanese-American identities. Thanks for stopping by and sampling a morsel of our favorite moments, bundled together into one familiar lunch box.</p>
          <p>開飯</p>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.subscriptionHeader}>Stay Updated!</div>
        <div className={styles.subscriptionPrompt}>This was meant as a single serving, but give us your email if you’d be interested in seconds:</div>
        <div id="mc_embed_signup">
          <form action="https://gmail.us1.list-manage.com/subscribe/post?u=08e6b0a815dd768c64816ed98&amp;id=dc38d2cb5d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
              <input type="email" className={styles.emailInput} defaultValue="" name="EMAIL" id="mce-EMAIL" placeholder="email address" required />
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_08e6b0a815dd768c64816ed98_dc38d2cb5d" tabIndex="-1" defaultValue=""/></div>
              <input className={styles.emailSubmit} type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" />
            </div>
          </form>
        </div>
      </div>
    </Page>
  );
}
