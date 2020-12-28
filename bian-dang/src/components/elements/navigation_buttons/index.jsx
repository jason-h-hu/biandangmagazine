import React from 'react';
import {Link} from 'gatsby';
import {Row, Col} from 'react-bootstrap'

import styles from './styles.module.css';

export default function NavigationButtons({next, previous, home}) {
  return (
    <Row className={styles.navigationButtons}>
      <Col xs="4" className={styles.previousButton}>
        {previous == null ? null : <Link className={styles.navigationButton} to={previous}>{'<'} Previous Post</Link>}
      </Col>
      <Col xs="4" className={styles.homeButton}>
        {home == null ? null : <Link className={styles.navigationButton} to={home}>
            <img src="icon.png" width="30" height="30" alt="Home"/>
          </Link>
        }
      </Col>
      <Col xs="4" className={styles.nextButton}>
        {next == null ? null : <Link className={styles.navigationButton} to={next}>Next Post {'>'}</Link>}
      </Col>
    </Row>
  );
}
