import React from 'react';
import {Image} from 'react-bootstrap'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import textStyles from '../../css/text.module.css';
import styles from './styles.module.css';

export default class Gallery extends React.Component{
  constructor ({title, description, author, images}) {
    super();
    this.state = {title, description, author, images, photoIndex: 0, isOpen: false};
  }

  openModal(photoIndex) {
    this.setState({ isOpen: true, photoIndex });
  }

  render() {
    const {title, description, author, images, photoIndex, isOpen} = this.state;
    const prevIndex = (photoIndex + 1) % images.length;
    const nextIndex = (photoIndex + images.length - 1) % images.length;
    return (
      <div>
        <div className={styles.header}>
          {title == null ? null : <div className={textStyles.headerLg}>{title}</div>}
          {author == null ? null : <div className={textStyles.headerMd}>by {author}</div>}
        </div>
        <div className={styles.description}>        
          {description == null ? null : <div className={textStyles.bodyText}>{description}</div>}
        </div>
        {
          isOpen ? 
          <Lightbox
            mainSrc={images[photoIndex].resource}
            nextSrc={images[nextIndex].resource}
            prevSrc={images[prevIndex].resource}
            imageCaption={images[photoIndex].caption}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() => this.setState({photoIndex: prevIndex})}
            onMoveNextRequest={() => this.setState({photoIndex: nextIndex})}
          /> : null
        }
        <div>
          {
            images.map(({resource, alt, caption}, i) => 
              <button 
                className={styles.imageWrapper} 
                key={i} 
                onClick={() => this.openModal(i)
              }>
                <Image src={resource} alt={alt} fluid />
                {
                  caption == null 
                    ? null 
                    : <div className={styles.caption}>
                        <span className={textStyles.captionText}>{caption}</span>
                      </div>
                }
              </button>
            )
          }
        </div>
      </div>
    );
  }
}
