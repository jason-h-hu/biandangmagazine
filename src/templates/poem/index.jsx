import React from 'react';

import styles from './styles.module.css';
import textStyles from '../../css/text.module.css';

export default function Poem({title, author, children}) {
  return (
    <div>
      <div className={styles.header}>
        <div className={textStyles.headerLg}>
          <span className={textStyles.darkModeColor}>{title}</span>
        </div>
        <div className={textStyles.headerMd}>
          <span className={textStyles.darkModeColor}>by {author}</span>
        </div>
      </div>
      <div className={textStyles.poetryText}>
        <span className={textStyles.darkModeColor}>{children}</span>
      </div>
    </div>
  );
}
