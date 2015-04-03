import React from 'react';
import {Link} from 'gatsby';
import {Navbar, Nav} from 'react-bootstrap'

import Logotype from '../logotype';
import styles from './styles.module.css';

export default function Header({darkMode = false}) {
  return (
    <Navbar expand="sm" className={styles.header} > 
      <Navbar.Brand className={styles.home}>
        <Link className={styles.mediumLogoButton} to="/"><Logotype size="medium"/></Link>
        <Link className={styles.smallLogoButton} to="/"><Logotype size="small"/></Link>
        <Link className={styles.xsmallLogoButton} to="/"><Logotype size="xsmall"/></Link>
      </Navbar.Brand>
      <Navbar.Toggle className={styles.hamburgerButton} aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" className={styles.buttons}>
        {
          [
            {link: "/about", text: 'About'},
            {link: "/team", text: 'The Team'},
            {link: "/brand", text: 'The Brand'},
          ].map(({link, text}, i) => 
            <Nav.Item className={styles.button} key={i}>
              <Link className={darkMode ? styles.linkDm : styles.link} to={link}>{text}</Link>
            </Nav.Item>  
          )
        }
      </Navbar.Collapse>
    </Navbar>
  );
}
