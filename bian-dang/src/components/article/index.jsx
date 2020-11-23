import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

import styles from './styles.module.css';

export default function Article({title, author, children}) {
  return (
    <Col 
      className={styles.article}
      lg={{span: 6, offset: 3}}  
      md={{span: 8, offset: 2}}  
      xs={{span: 10, offset: 1}}
    >
      <Row className={styles.header}>
        <Col xs="12" className={styles.title}>{title}</Col>
        <Col xs="12" className={styles.byLine}>by {author}</Col>
      </Row>
      <Row className={styles.body}>
        <Col xs="12">{children}</Col>
      </Row>
    </Col>
  );
}


