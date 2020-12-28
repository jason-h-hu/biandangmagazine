import React from 'react';
import {Navbar} from 'react-bootstrap'

import styles from './styles.module.css';

export default function Footer() {
  return (
    <Navbar expand="lg" className={styles.footer}> 
      <div className={styles.copyright}>© 2020 Bian Dang Magazine</div>
    </Navbar>
  );
}
