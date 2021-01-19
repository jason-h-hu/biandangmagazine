import React from 'react';
import {Link} from 'gatsby';
import {Image, Row, Col} from 'react-bootstrap'

import textStyles from '../../css/text.module.css';
import styles from './styles.module.css';
import BobaImage from './Mobile_1@2x.png';
import BingImage from './Mobile_2@2x.png';
import BowlImage from './Mobile_3@2x.png';
import BaoImage from './Mobile_4@2x.png';

export default function HomeList() {
  return (
    <div className={styles.homeList}>
      {
        [
          {img: BobaImage, style: 'boba', author: 'Jessica Lin', title: 'With boba, half sweet', url: '/boba/'},
          {img: BingImage, style: 'bing', author: 'Jason Hu', title: 'Bing', url: '/bing/'},
          {img: BowlImage, style: 'bowl', author: 'Jane Li', title: 'Bowl', url: '/bowl/'},
          {img: BaoImage, style: 'bao', author: 'Carolyn Huang', title: 'Bao', url: '/bao/'},
        ].map(({img, title, author, url}, i) => 
          <Link className={styles.articleWrapper} key={i} to={url}>
            <div className={styles.articleText}>
              <div className={textStyles.headerLg}>{title}</div>
              <div className={textStyles.headerMd}>by {author}</div>
            </div>
            <Image src={img} fluid/>
          </Link>
        )
      }
    </div>
  );
}