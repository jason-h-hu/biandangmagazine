import React from 'react';
import {Image, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faEtsy, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import Page from '../../components/page';
import textStyles from '../../css/text.module.css';
import styles from './styles.module.css';

import janeProfilePic from './jane.jpg';
import jasonProfilePic from './jason.jpg';
import jessicaProfilePic from './jessica.jpg';
import carolynProfilePic from './carolyn.jpg';

const ICON_LOOKUP = {
  Instagram: faInstagram,
  Twitter: faTwitter,
  Etsy: faEtsy,
}
export default function About() {
  return (
    <Page title="About">
      <div className={styles.header}><span className={textStyles.headerLg}>About Us</span></div>
      <div className={textStyles.bodyText}>
        <p>We’ve always wanted to create something that evoked a sense of home. To us, Taiwanese food is more than just a series of dishes; it’s a walking tour tasting menu of memories. Mornings hurrying past a corner food stall, a sip of comfort while growing through life stages, a common thread between mom and daughter, or a porcelain bowl cradling soupy noodles.</p>
        <p>便當 (<em>bian dang</em>) are takeout lunch boxes, paper sandwich trays stuffed with side dishes, and they parallel our fragmented Taiwanese-American identities. Thanks for stopping by and sampling a morsel of our favorite moments, bundled together into one familiar lunch box.</p>
        <p>開飯</p>
      </div>
      <div className={styles.profiles}>
        <div className={styles.header}><span className={textStyles.headerLg}>The Team</span></div>
        {
          [
            {
              resource: janeProfilePic, 
              name: 'Jane Li', 
              biography: 'In the past few years, I’ve found pride in my identity as a Taiwanese American, building a relationship with my roots through food. I love sharing this part of myself with friends, trying new recipes and making meals together. But when bringing people physically together isn’t possible during a pandemic, 便當 allows me to continue sharing this passion virtually through art. ',
              social: [
                {label: 'Portfolio', value: 'janeli.co', url: 'http://www.janeli.co/'},
                {label: 'Instagram', value: '@janeli.co', url: 'https://www.instagram.com/janeli.co/'},
                {label: 'Etsy', value: 'JaneLiCo', url: 'https://www.etsy.com/shop/JaneLiCo'},
              ],
            },
            {
              resource: jasonProfilePic, 
              name: 'Jason Hu', 
              biography: 'I love writing about, reading, and (of course) eating diasporic food. It is the first touchpoint between cultures, and at the same time, recipes are an enduring piece of home that can follow you anywhere. For me, Taiwanese-American food is more than just the novelty and kitsch of fusion cuisine: In the hyphen you can find flavors of adaptation and ingenuity. 便當 is a way for me to explore and celebrate these foods.',
              social: [
                {label: 'Instagram', value: '@little_huligan', url: 'https://www.instagram.com/little_huligan/'},
                {label: 'Twitter', value: '@jason_h_hu', url: 'https://twitter.com/jason_h_hu'},
              ],
            },
            {
              resource: jessicaProfilePic, 
              name: 'Jessica Lin', 
              biography: 'As a Taiwanese-American who grew up in Singapore, I often find myself seeking a sense of belonging and home. It always feels like something in my life is missing - maybe because the things I love are spread across the globe; my family’s in Taiwan, my memories are in Singapore, and my core is in San francisco. Food is a comforting remedy, whether that means sweating over a pot of homemade laksa or going on a quick (daily) boba run. 便當 is a way for me to share and connect with my stories.',
              social: [
                {label: 'Portfolio', value: 'linjessica.com', url: 'http://www.linjessica.com/'},
                {label: 'Art Portfolio', value: 'jessarts.com', url: 'http://www.jessarts.com/'},
                {label: 'Instagram', value: '@dontthinkjessdo', url: 'https://www.instagram.com/dontthinkjessdo/'},
                {label: 'Instagram', value: '@jesslinmilktea', url: 'https://www.instagram.com/jesslinmilktea/'},
              ],
            },
            {
              resource: carolynProfilePic, 
              name: 'Carolyn Huang', 
              biography: 'There are distinct moments in my life when “Taiwanese” felt more me than “American.” Listening to Jay Chou for the first time, while his album played at a shoe store in Taipei Main Station. Eating a massive fried chicken cutlet at Shilin Night Market. Explaining to my coworkers why O Ah Jian (oyster omelette) is superior to, well, everything. Creating 便當 has been one of those moments. Now, my ABT friends and I have a little space on the web that we can call our own. Welcome to our home.',
              social: [
                {label: 'Portfolio', value: 'carolynjhuang.com', url: 'http://www.carolynjhuang.com/'},
                {label: 'Instagram', value: '@huangcarolyn', url: 'https://www.instagram.com/huangcarolyn/'},
              ],
            },
          ].map(
            ({resource, name, biography, social}) => 
              <Row className={styles.profile}>
                <Col md={6}>
                  <Image className={styles.profilePicture} src={resource} alt={name} fluid/> 
                </Col>
                <Col md={6}>
                  <div className={textStyles.headerMd}>{name}</div>
                  <div className={textStyles.bodyText}>{biography}</div>
                  <Row>{
                    social.map(({label, value, url}, i) => 
                      <Col md={12} key={i} className={styles.social}>
                        <a className={styles.socialLink} href={url}>
                          <span className={styles.socialLabel}>
                            {
                              ICON_LOOKUP[label] == null 
                                ? <FontAwesomeIcon icon={faGlobe} />
                                : <FontAwesomeIcon icon={ICON_LOOKUP[label]} />
                            }
                          </span>
                          <span className={styles.socialValue} href={url}>{value}</span>
                        </a>
                      </Col>
                    )
                  }</Row>
                </Col>
              </Row>
            )
        }
      </div>
    </Page>
  );
}
