import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

import RecipeIngredients from '../recipe_ingredients';
import RecipeSteps from '../recipe_steps';

import styles from './styles.module.css';

export default function Recipe({
  title, 
  translation,
  author, 
  yieldAmount, 
  prepTime,
  ingredientSections,
  steps
}) {
  return (
    <Col 
      className={styles.recipe}
      lg={{span: 6, offset: 3}}  
      md={{span: 8, offset: 2}}  
      xs={{span: 12, offset: 0}}
    >
      <Row className={styles.header}>
        <Col xs="12" className={styles.title}>{title} {translation == null ? null : <span className={styles.translation}>({translation})</span>}</Col>
        <Col xs="12" className={styles.byLine}>by {author}</Col>
        <Col xs="12" className={styles.attributes}>
          <div>Yield: {yieldAmount}</div>
          <div>Time: {prepTime}</div>
        </Col>
      </Row>
      <Row className={styles.body}>
        {
          ingredientSections.map(({sectionTitle, ingredients, notes}) => 
            <RecipeIngredients 
              sectionTitle={sectionTitle}
              ingredients={ingredients}
              notes={notes}
            />
          )
        }
      </Row>
      <RecipeSteps steps={steps} />
    </Col>
  );
}


