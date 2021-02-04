import React from 'react';
import {Link} from 'gatsby';
import {Image} from 'react-bootstrap'

import HomeImage from './Home@2x.png';
import BobaImage from './Home_1@2x.png';
import BingImage from './Home_2@2x.png';
import BowlImage from './Home_3@2x.png';
import BaoImage from './Home_4@2x.png';
import styles from './styles.module.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {backgroundImage: HomeImage};
  }

  onMouseOver(backgroundImage) {
    this.setState({backgroundImage});
  }

  getBackgroundImage() {
    return this.state.backgroundImage;
  }
  
  render() {
    return (
      <div className={styles.wrapper}>
        <Image src={this.getBackgroundImage()} fluid/>
        <div className={styles.gridOuter}>
          {
            [
              {style: 'boba', title: 'Boba', url: '/boba/', img: BobaImage},
              {style: 'bing', title: 'Bing', url: '/bing/', img: BingImage},
              {style: 'bowl', title: 'Bowl', url: '/bowl/', img: BowlImage},
              {style: 'bao', title: 'Bao', url: '/bao/', img: BaoImage},
            ].map(({style, title, url, img}, i) => 
              <Link 
                key={i}
                to={url}
                className={styles[style]} 
                onMouseOver={() => this.onMouseOver(img)}
                onMouseLeave={() => this.onMouseOver(HomeImage)}
              >
              </Link>
            )
          }
          <div className={styles.about}></div>
        </div>
      </div>
    );
  }
}
