import {Link} from 'gatsby';
import React from 'react';

import styles from './styles.module.css';

export default function Button({text, link, href, size, children}) {
  if (href != null && link != null) {
    throw new Error('Cannot create a button with a link and an href');
  }

  const className = getClassName(size);
  return  (href != null) 
    ? (<a className={className} href={href}>{text}{children}</a>)
    : (<Link className={className} to={link}>{text}{children}</Link>);
}

function getClassName (size='md') {
  switch (size) {
    case 'lg':
      return styles.buttonLg;
    case 'md':
    default:
      return styles.buttonMd;
    // TODO: Define more button sizes as necessary
  }
}