import React from 'react';

import styles from './styles.module.css';
import textStyles from '../../components/text.module.css';

export default function Poem({title, author, children}) {
  return (
    <div>
      <div className={styles.header}>
        <div className={textStyles.headerLg}>{title}</div>
        <div className={textStyles.headerMd}>by {author}</div>
      </div>
      <div className={textStyles.poetryText}>{children}</div>
    </div>
  );
}
