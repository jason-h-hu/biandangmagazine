import React from 'react';
import {Link} from 'gatsby';
import {Helmet} from 'react-helmet';

import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Helmet><title>Bian Dang</title></Helmet>
      <div>
        <Link to={'/bao/'}><h4>Bao</h4></Link>
        <Link to={'/bing/'}><h4>Bing</h4></Link>
      </div>
    </Layout>
  );
}
