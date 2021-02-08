import React from 'react';

import styles from './styles.module.css';

export default function Footer({darkMode=false}) {
  return (
    <div className={darkMode ? styles.footerDark : styles.footer}>© 2021 Bian Dang Magazine</div>
 );
}
