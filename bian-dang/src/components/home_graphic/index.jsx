import React from 'react';
import {Link} from 'gatsby';
import {Image, Row, Col} from 'react-bootstrap'

import HomeImage from './Home@3x.png';

export default function Home() {
  return (
    <div>
      <Image src={HomeImage} fluid/>
      <Link to={'/bao/'}><h4>Bao</h4></Link>
      <Link to={'/bing/'}><h4>Bing</h4></Link>
      <Link to={'/boba/'}><h4>Boba</h4></Link>
      <Link to={'/ceramics/'}><h4>Ceramics</h4></Link>
    </div>
  );
}
