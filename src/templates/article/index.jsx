import React from 'react';

import Button from '../../components/button';
import styles from './styles.module.css';
import textStyles from '../../css/text.module.css';

export default function Article({
  title, // string
  author, // string
  callout, // {text: string, link: string}
  children, // react component
}) {
  return (
    <div className={styles.article}>
      <div className={styles.header}>
        <div className={styles.byLines}>
          <div className={textStyles.headerLg}>{title}</div>
          <div className={textStyles.headerMd}>by {author}</div>
        </div>
        {
          callout == null 
            ? null 
            : <Button text={callout.text} link={callout.link}/>
          }
      </div>
      <div className={textStyles.bodyText}>{children}</div>
    </div>
  );
}


