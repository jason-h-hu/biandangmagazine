import React from 'react';
import {Link} from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Icon from '../icon';
import styles from './styles.module.css';

export default function NavigationButtons({next, previous, home, darkMode}) {
  const linkClass =  darkMode ? styles.navigationButtonDm : styles.navigationButton;
  return (
    <div className={styles.navigationButtons}>
      <div className={styles.previousButton}>
        {
          previous == null 
            ? null 
            : <Link className={linkClass} to={previous}>
                <span className={styles.desktopText}>Previous Post</span>
                <span className={styles.mobileText}><FontAwesomeIcon icon={faArrowLeft}/></span>
              </Link>
        }
      </div>
      <div className={styles.homeButton}>
        {
          home == null 
            ? null
            : <Link className={linkClass} to={home}><Icon alt="Home"/></Link>
        }
      </div>
      <div className={styles.nextButton}>
        {
          next == null 
            ? null 
            : <Link className={linkClass} to={next}>
                <span className={styles.desktopText}>Next Post</span>
                <span className={styles.mobileText}><FontAwesomeIcon icon={faArrowRight}/></span>
              </Link>
        }
      </div>
    </div>
  );
}
