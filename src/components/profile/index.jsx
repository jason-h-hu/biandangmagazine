import React from 'react';
import {Image} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faEtsy, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.css';

const ICON_LOOKUP = {
  Instagram: faInstagram,
  Twitter: faTwitter,
  Etsy: faEtsy,
}
export default function Profile({img, name, biography, position, social, prompt, answer}) {
  return (
    <div className={styles.profile}>
      <Image className={styles.profilePicture} src={img} alt={name} fluid /> 
      <div className={styles.profileInformation}> 
        <div className={styles.profileName}>{name}</div>
        <div className={styles.position}>{position}</div>
        <div className={styles.prompt}>{prompt}</div>
        <div className={styles.answer}>{answer}</div>
        <div className={styles.socials}>{
          social.map(({label, value, url}, i) => <Social label={label} value={value} url={url} key={i}/>)
        }</div>
      </div>
      
    </div>
  );
}

function Social({label, value, url}) {
  return (
    <a className={styles.socialLink} href={url} target="_blank">
      <span className={styles.socialLabel}>
        {
          ICON_LOOKUP[label] == null
            ? <FontAwesomeIcon icon={faGlobe} />
            : <FontAwesomeIcon icon={ICON_LOOKUP[label]} />
        }
      </span>
      <span className={styles.socialValue} href={url}>{value}</span>
    </a>
  );
}