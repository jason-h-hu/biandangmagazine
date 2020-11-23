import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

import styles from './styles.module.css';

export default function RecipeIngredients({
  sectionTitle, 
  ingredients, 
  notes: sectionNotes
}) {
  return (
    <Col xs="12">
      {sectionTitle == null ? null : <div className={styles.title}>{sectionTitle}</div>}
      {/* {sectionNotes == null ? null : <div className={styles.notes}>Note: {sectionNotes}</div>} */}
      <div>
        <ul className={styles.ingredientsList}>
        {
          ingredients.map(({quantity, unit, name, modifier, notes: ingredientNote}) => 
            <li>
              <div><span className={styles.ingredientQuantity}>{quantity}</span> {unit} {modifier == null ? name : `${name}, ${modifier}`}</div>
              {/* {ingredientNote == null ? null : <div className={styles.notes}>Note: {ingredientNote}</div>} */}
            </li>
          )
        }
        </ul>
      </div>
    </Col>
  );
}
