import React from 'react';
import {Row, Col} from 'react-bootstrap'

import Page from '../../components/page';
import Profile from '../../components/profile';
import textStyles from '../../css/text.module.css';
import styles from './styles.module.css';

import janeProfilePic from './jane.jpg';
import jasonProfilePic from './jason.jpg';
import jessicaProfilePic from './jess.jpg';
import carolynProfilePic from './carolyn.jpg';

const PROFILE_DATA = [
  {
    img: janeProfilePic, 
    name: 'Jane Li', 
    position: "Designer + Illustrator",
    prompt: 'How do you dress up instant noodles?',
    answer: 'An egg + bok choy',
    biography: 'In the past few years, I’ve found pride in my identity as a Taiwanese American, building a relationship with my roots through food. I love sharing this part of myself with friends, trying new recipes and making meals together. But when bringing people physically together isn’t possible during a pandemic, 便當 allows me to continue sharing this passion virtually through art. ',
    social: [
      {label: 'Portfolio', value: 'janeli.co', url: 'http://www.janeli.co/'},
      {label: 'Instagram', value: '@janeli.co', url: 'https://www.instagram.com/janeli.co/'},
      {label: 'Etsy', value: 'JaneLiCo', url: 'https://www.etsy.com/shop/JaneLiCo'},
    ],
  },
  {
    img: jasonProfilePic, 
    name: 'Jason Hu', 
    position: "Programmer",
    prompt: 'Any food/eating habit dating deal breakers?',
    answer: 'I’ll take a picky eater over a snobby one',
    biography: 'I love writing about, reading, and (of course) eating diasporic food. It is the first touchpoint between cultures, and at the same time, recipes are an enduring piece of home that can follow you anywhere. For me, Taiwanese-American food is more than just the novelty and kitsch of fusion cuisine: In the hyphen you can find flavors of adaptation and ingenuity. 便當 is a way for me to explore and celebrate these foods.',
    social: [
      {label: 'Instagram', value: '@little_huligan', url: 'https://www.instagram.com/little_huligan/'},
      {label: 'Twitter', value: '@jason_h_hu', url: 'https://twitter.com/jason_h_hu'},
    ],
  },
  {
    img: jessicaProfilePic, 
    name: 'Jessica Lin', 
    position: "Brand Designer",
    prompt: 'Most underrated Taiwanese dish?',
    answer: '炒米粉 (chao mifen) - Taiwanese pan-fried rice noodles',
    biography: 'As a Taiwanese-American who grew up in Singapore, I often find myself seeking a sense of belonging and home. It always feels like something in my life is missing - maybe because the things I love are spread across the globe; my family’s in Taiwan, my memories are in Singapore, and my core is in San francisco. Food is a comforting remedy, whether that means sweating over a pot of homemade laksa or going on a quick (daily) boba run. 便當 is a way for me to share and connect with my stories.',
    social: [
      {label: 'Portfolio', value: 'linjessica.com', url: 'http://www.linjessica.com/'},
      {label: 'Art Portfolio', value: 'jessarts.com', url: 'http://www.jessarts.com/'},
      {label: 'Instagram', value: '@dontthinkjessdo', url: 'https://www.instagram.com/dontthinkjessdo/'},
      {label: 'Instagram', value: '@jesslinmilktea', url: 'https://www.instagram.com/jesslinmilktea/'},
    ],
  },
  {
    img: carolynProfilePic, 
    name: 'Carolyn Huang', 
    position: "Project Manager + Copywriter",
    prompt: 'What’s always in your luggage on a return flight from Taiwan?',
    answer: 'Egg roll biscuits and pineapple cakes',
    biography: 'There are distinct moments in my life when “Taiwanese” felt more me than “American.” Listening to Jay Chou for the first time, while his album played at a shoe store in Taipei Main Station. Eating a massive fried chicken cutlet at Shilin Night Market. Explaining to my coworkers why O Ah Jian (oyster omelette) is superior to, well, everything. Creating 便當 has been one of those moments. Now, my ABT friends and I have a little space on the web that we can call our own. Welcome to our home.',
    social: [
      {label: 'Portfolio', value: 'carolynjhuang.com', url: 'http://www.carolynjhuang.com/'},
      {label: 'Instagram', value: '@huangcarolyn', url: 'https://www.instagram.com/huangcarolyn/'},
    ],
  },
];

export default function Team() {
  return (
    <Page title="The Team">
      <div className={styles.section}>
        <div className={styles.header}><span className={textStyles.headerLg}>The Team</span></div>
        <Row className={styles.profiles}>
          {
            PROFILE_DATA.map(({img, name, biography, prompt, answer, social, position}, i) => 
              <Col sm={6} key={i}>
                <Profile 
                  img={img} 
                  name={name} 
                  position={position}
                  biography={biography} 
                  social={social}
                  prompt={prompt}
                  answer={answer}
                />
              </Col>
            )
          }
        </Row>
      </div>
    </Page>
  );
}
