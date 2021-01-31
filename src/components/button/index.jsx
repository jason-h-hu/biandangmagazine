import {Link} from 'gatsby';
import React from 'react';

import styles from './styles.module.css';

export default function Contact({text, link}) {
  return (
    <Link className={styles.button} to={link}>{text}</Link>
  );
}
