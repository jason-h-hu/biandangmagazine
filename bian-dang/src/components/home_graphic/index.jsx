import React from 'react';
import {Link} from 'gatsby';

export default function Home() {
  return (
    <div>
      <Link to={'/bao/'}><h4>Bao</h4></Link>
      <Link to={'/bing/'}><h4>Bing</h4></Link>
      <Link to={'/boba/'}><h4>Boba</h4></Link>
      <Link to={'/ceramics/'}><h4>Ceramics</h4></Link>
    </div>
  );
}
