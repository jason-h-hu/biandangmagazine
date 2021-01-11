import React from 'react';

import styles from './styles.module.css';
import textStyles from '../../css/text.module.css';

export default function Article({title, author, children}) {
  return (
    <div>
      <div className={styles.header}>
        <div className={textStyles.headerLg}>{title}</div>
        <div className={textStyles.headerMd}>by {author}</div>
      </div>
      <div className={textStyles.bodyText}>{children}</div>
    </div>
  );
}


