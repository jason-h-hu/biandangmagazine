import React from 'react';
import {Link} from 'gatsby';
import {Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Icon from '../icon';
import styles from './styles.module.css';

export default function NavigationButtons({next, previous, home, darkMode}) {
  const linkClass =  darkMode ? styles.navigationButtonDm : styles.navigationButton;
  return (
    <Row className={styles.navigationButtons}>
      <Col xs="4" className={styles.previousButton}>
        {
          previous == null 
            ? null 
            : <Link className={linkClass} to={previous}>
                <span className={styles.desktopText}>Previous Post</span>
                <span className={styles.mobileText}><FontAwesomeIcon icon={faArrowLeft}/></span>
              </Link>
        }
      </Col>
      <Col xs="4" className={styles.homeButton}>
        {
          home == null 
            ? null
            : <Link className={linkClass} to={home}><Icon alt="Home"/></Link>
        }
      </Col>
      <Col xs="4" className={styles.nextButton}>
        {
          next == null 
            ? null 
            : <Link className={linkClass} to={next}>
                <span className={styles.desktopText}>Next Post</span>
                <span className={styles.mobileText}><FontAwesomeIcon icon={faArrowRight}/></span>
              </Link>
        }
      </Col>
    </Row>
  );
}
