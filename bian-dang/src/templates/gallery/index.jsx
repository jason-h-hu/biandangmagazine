import React from 'react';
import {Image} from 'react-bootstrap'

import textStyles from '../../css/text.module.css';
import styles from './styles.module.css';

export default function Gallery({title, description, author, images}) {
  return (
    <div>
      <div className={styles.header}>
        {title == null ? null : <div className={textStyles.headerLg}>{title}</div>}
        {author == null ? null : <div className={textStyles.headerMd}>by {author}</div>}
      </div>
      <div className={styles.description}>        
        {description == null ? null : <div className={textStyles.bodyText}>{description}</div>}
      </div>
      <div>
        {
          images.map(({resource, alt, caption}, i) => 
            <div className={styles.imageWrapper}>
              <Image key={i} src={resource} alt={alt} fluid />
              {caption == null ? null : <div className={textStyles.captionText}>{caption}</div>}
            </div>
          )
        }
      </div>
    </div>
  );
}
