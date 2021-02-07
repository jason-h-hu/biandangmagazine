import React from 'react';
import {Link} from 'gatsby';
import {Navbar, Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


import Logotype from '../logotype';
import styles from './styles.module.css';

export default function Header({darkMode = false}) {
  return (
    <Navbar expand="sm" className={darkMode ? styles.headerDark : styles.header} > 
      <Navbar.Brand className={styles.home}>
        <Link className={styles.mediumLogoButton} to="/"><Logotype size="medium"/></Link>
        <Link className={styles.smallLogoButton} to="/"><Logotype size="small"/></Link>
        <Link className={styles.xsmallLogoButton} to="/"><Logotype size="xsmall"/></Link>
      </Navbar.Brand>
      <Navbar.Toggle className={darkMode ? styles.hamburgerButtonDark: styles.hamburgerButton} aria-controls="basic-navbar-nav">
        <FontAwesomeIcon className={darkMode ? styles.hamburgerButtonDark: styles.hamburgerButton}  icon={faBars}/>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className={styles.buttons}>
        {
          [
            {link: "/about", text: 'About'},
            {link: "/team", text: 'The Team'},
            {link: "/brand", text: 'The Brand'},
          ].map(({link, text}, i) => 
            <Nav.Item className={styles.button} key={i}>
              <Link className={darkMode ? styles.linkDark : styles.link} to={link}>{text}</Link>
            </Nav.Item>  
          )
        }
      </Navbar.Collapse>
    </Navbar>
  );
}
