import React from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'gatsby';

export default function Layout({children}) {
  return <div>
    <Helmet><meta charSet='utf-8'/></Helmet>
    <Link to="/">Home</Link>
    {children}
  </div>
}
