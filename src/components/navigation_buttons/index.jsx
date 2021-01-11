import React from 'react';
import {Link} from 'gatsby';
import {Row, Col, Image} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Icon from '../icon';
import styles from './styles.module.css';

export default function NavigationButtons({next, previous, home}) {
  return (
    <Row className={styles.navigationButtons}>
      <Col xs="4" className={styles.previousButton}>
        {
          previous == null 
            ? null 
            : <Link className={styles.navigationButton} to={previous}>
                <span className={styles.desktopText}>Previous Post</span>
                <span className={styles.mobileText}><FontAwesomeIcon icon={faArrowLeft}/></span>
              </Link>
        }
      </Col>
      <Col xs="4" className={styles.homeButton}>
        {
          home == null 
            ? null
            : <Link className={styles.navigationButton} to={home}><Icon alt="Home"/></Link>
        }
      </Col>
      <Col xs="4" className={styles.nextButton}>
        {
          next == null 
            ? null 
            : <Link className={styles.navigationButton} to={next}>
                <span className={styles.desktopText}>Next Post</span>
                <span className={styles.mobileText}><FontAwesomeIcon icon={faArrowRight}/></span>
              </Link>
        }
      </Col>
    </Row>
  );
}
