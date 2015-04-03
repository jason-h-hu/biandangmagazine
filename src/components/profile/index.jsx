import React from 'react';
import {Image, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faEtsy, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import textStyles from '../../css/text.module.css';
import styles from './styles.module.css';

const ICON_LOOKUP = {
  Instagram: faInstagram,
  Twitter: faTwitter,
  Etsy: faEtsy,
}
export default function Profile({img, name, biography, social}) {
  return (
    <div className={styles.profile}>
      <Image className={styles.profilePicture} src={img} alt={name} fluid /> 
      <div className={styles.profileName}>{name}</div>
      <div className={textStyles.captionText}>{biography}</div>
      <div className={styles.socials}>{
        social.map(({label, value, url}, i) => 
          <a className={styles.socialLink} href={url} key={i}>
            <span className={styles.socialLabel}>
              {
                ICON_LOOKUP[label] == null
                  ? <FontAwesomeIcon icon={faGlobe} />
                  : <FontAwesomeIcon icon={ICON_LOOKUP[label]} />
              }
            </span>
            <span className={styles.socialValue} href={url}>{value}</span>
          </a>
        )
      }</div>
    </div>
  );
}
