import React from 'react';
import {Link} from 'gatsby';
import {Image} from 'react-bootstrap'

import textStyles from '../../css/text.module.css';
import styles from './styles.module.css';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
    this.photos = props.photos; // {url, caption, credit}
  }

  setIndex(index) {
    this.setState({index});
  }

  getActiveImage() {
    return this.photos[this.state.index];
  }

  render() {
    const {url, caption, credit} = this.getActiveImage();
    return (
      <div className={styles.wrapper}>
        <Image src={url} fluid/>
        <div className={styles.carouselFooter}>
          <div className={styles.caption}>
            <div className={textStyles.captionText}>{caption}</div>
          </div>
          {
            this.photos == null || this.photos.length <= 1
              ? null
              : <div className={styles.thumbnails}>
                {
                  this.photos.map((photo, i) => 
                    <button 
                      key={i}
                      className={i === this.state.index ? styles.selectedThumbnail : styles.thumbnail}
                      onMouseOver={() => this.setIndex(i)}
                      onClick={() => this.setIndex(i)}
                    />
                  )
                }
              </div>
          }
          {
            credit == null
              ? null
              : <div className={styles.credit}>
                  <div className={textStyles.captionText}>Photo by {credit}</div>
                </div>
          }
        </div>
      </div>
    );
  }
}
