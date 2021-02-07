import React from 'react';

import Carousel from '../../components/carousel';
import styles from './styles.module.css';
import textStyles from '../../css/text.module.css';
import {Image} from 'react-bootstrap'

export default function Recipe({
  title, 
  translation,
  author, 
  slug,
  bannerPhoto,
  yieldAmount,
  prepTime,
  equipment,
  ingredientSections,
  steps
}) {
  const notes = [];
  return (
    <div id={slug == null ? null : slug}>
      {
        bannerPhoto == null 
          ? null 
          : <div className={styles.bannerPhoto}><Image src={bannerPhoto} fluid /></div>
      }
      <div className={styles.header}>
        <div className={textStyles.headerLg}>{title} <span className={textStyles.headerMd}>{translation == null ? null : `(${translation})`}</span></div>
        {author == null ? null : <div className={textStyles.headerMd}>by {author}</div>}
        <div className={styles.attributes}>
          <div className={textStyles.headerXs}>Yield: {yieldAmount}</div>
          <div className={textStyles.headerXs}>Time: {prepTime}</div>
        </div>
      </div>
      <div className={styles.equipment}>
        <div className={textStyles.headerSm}>Specialty Equipment</div>
        {
          equipment.map(({name, note}, i) => {
            if (note != null) notes.push(note);
            return (
              <div className={textStyles.ingredientListText} key={`${name}:${i}`}>
                {name} {
                  note == null 
                    ? null 
                    : <a className={textStyles.headerSm} href={`#NOTE${notes.length}`}><sup> {notes.length}</sup></a>
                  }
              </div>              
            );
          })
        }
      </div>
      <div className={styles.ingredients}>
        {
          ingredientSections.map(({sectionTitle, ingredients, note}) => 
            {
              if (note != null) notes.push(note);
              return (
                <div key={sectionTitle} className={styles.ingredientsSection}>
                  {
                    sectionTitle == null 
                      ? null 
                      : <div className={textStyles.headerSm}>
                          {sectionTitle} {
                            note == null 
                              ? null 
                              : <a className={textStyles.headerSm} href={`#NOTE${notes.length}`}><sup> {notes.length}</sup></a>
                            }
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
                              {ingredientNote == null ? null : <a className={textStyles.ingredientListText} href={`#NOTE${notes.length}`}><sup>{notes.length}</sup></a>}
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
          steps.map(({name, description, note, photos}, i) => {
            if (note != null) notes.push(note);
            return (
              <div className={styles.step} key={i}>
                {
                  (photos == null || photos.length === 0)
                    ? null
                    : <Carousel photos={photos}/>
                }
                <div className={textStyles.headerSm}>
                  {
                    name == null 
                      ? `Step ${i + 1}` 
                      : `Step ${i + 1}. ${name}`
                  } {note == null ? null : <a className={textStyles.headerSm} href={`#NOTE${notes.length}`}><sup>{notes.length}</sup></a>}
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


