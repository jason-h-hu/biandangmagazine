import React from 'react';
import {Link} from 'gatsby';
import {Image, Row, Col} from 'react-bootstrap'

import textStyles from '../../css/text.module.css';
import styles from './styles.module.css';
import TestImage from './test.png';

export default function HomeList() {
  return (
    <div className={styles.homeList}>
      {
        [
          {img: TestImage, style: 'boba', author: 'Jessica Lin', title: 'With boba, half sweet', url: '/boba/'},
          {img: TestImage, style: 'bing', author: 'Jason Hu', title: 'Bing', url: '/bing/'},
          {img: TestImage, style: 'bowl', author: 'Jane Li', title: 'Taiwanese Food as Ceramics', url: '/bowl/'},
          {img: TestImage, style: 'bao', author: 'Carolyn Huang', title: 'Bao', url: '/bao/'},
        ].map(({img, style, title, author, url}, i) => 
          <div className={styles.articleWrapper} key={i}>
            <Image src={img} fluid/>
            <div className={styles.background} />
            <div className={styles.articleText}>
              <Link className={textStyles.headerLg} to={url}>{title}</Link>
              <div className={textStyles.headerMd}>by {author}</div>
            </div>
          </div>
        )
      }
    </div>
  );
}