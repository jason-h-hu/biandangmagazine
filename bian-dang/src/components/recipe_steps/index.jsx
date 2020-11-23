import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

import styles from './styles.module.css';

export default function RecipeSteps({steps}) {
  let noteNum = 1
  const notes = steps
    .filter(({notes}) => notes != null)
    .map(({notes}) => notes);
  return (
    <Row>
      {
        steps.map(({name, description, notes}, i) => 
          <Col xs="12" className={styles.step}>
            <div className={styles.stepName}>
              {
                name == null 
                  ? `Step ${i + 1}` 
                  : `Step ${i + 1}. ${name}`
              } {
                notes == null 
                  ? null 
                  : <a href={`#NOTE${noteNum}`}><sup>{noteNum++}</sup></a>
              }
            </div>
            <div className={styles.stepDescription}>{description}</div>
          </Col>
        )
      }
      {notes.length === 0 ? null : <Col xs="12">Notes</Col>}
      {
        notes.map((note, i) => 
          <Col xs="12" className={styles.stepNote} id={`NOTE${i + 1}`}>
            <span className={styles.stepNoteNumber}>{i + 1}. </span>{note}
          </Col>
        )
      }
    </Row>
  );
}


