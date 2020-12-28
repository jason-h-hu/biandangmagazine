import React from 'react';

import styles from './styles.module.css';
import textStyles from '../../components/text.module.css';

export default function Recipe({
  title, 
  translation,
  author, 
  yieldAmount, 
  prepTime,
  ingredientSections,
  steps
}) {
  const notes = [];
  return (
    <div>
      <div className={styles.header}>
        <div className={textStyles.headerLg}>{title} <span className={textStyles.headerMd}>{translation == null ? null : `(${translation})`}</span></div>
        <div className={textStyles.headerMd}>by {author}</div>
        <div className={styles.attributes}>
          <div className={textStyles.labelText}>Yield: {yieldAmount}</div>
          <div className={textStyles.labelText}>Time: {prepTime}</div>
        </div>
      </div>
      <div className={styles.ingredients}>
        {
          ingredientSections.map(({sectionTitle, ingredients, note}) => 
            {
              if (note != null) notes.push(note);
              return (
                <div key={sectionTitle}>
                  {
                    sectionTitle == null 
                      ? null 
                      : <div className={textStyles.headerSm}>
                          {sectionTitle} {note == null ? null : <a className={styles.footnote} href={`#NOTE${notes.length}`}><sup> {notes.length}</sup></a>}
                        </div>
                  }
                  <ul className={styles.ingredientsList}>
                    {
                      ingredients.map(({quantity, unit, name, modifier, note: ingredientNote}) => {
                        if (ingredientNote != null) notes.push(ingredientNote);

                        return (
                          <li key={`${quantity}${name}${modifier}`} className={textStyles.ingredientListText}>
                            <span className={styles.ingredientQuantity}>{quantity}</span>
                            <span className={styles.ingredientNameAndModifier}>
                              {` ${unit}`} {modifier == null ? `${name} ` : `${name}, ${modifier} `}
                              {ingredientNote == null ? null : <a className={styles.footnote} href={`#NOTE${notes.length}`}><sup>{notes.length}</sup></a>}
                            </span>
                          </li>                            
                        );
                      })
                    }
                  </ul>
                </div>
              );
            }
          )
        }
      </div>
      <div>
        {
          steps.map(({name, description, note}, i) => {
            if (note != null) notes.push(note);
            return (
              <div className={styles.step} key={i}>
                <div className={textStyles.headerSm}>
                  {
                    name == null 
                      ? `Step ${i + 1}` 
                      : `Step ${i + 1}. ${name}`
                  } {note == null ? null : <a className={styles.footnote} href={`#NOTE${notes.length}`}><sup>{notes.length}</sup></a>}
                </div>
                <div className={textStyles.bodyText}>{description}</div>
              </div>
            );
          })
        }
        {notes.length === 0 ? null : <div className={textStyles.headerXs}>Notes</div>}
        {
          notes.map((note, i) => 
            <div id={`NOTE${i + 1}`} key={`NOTE${i + 1}`} className={textStyles.footnoteText}>
              <div className={styles.stepNote}>
                <span className={styles.stepNoteNumber}>{i + 1}. </span>{note}
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}


