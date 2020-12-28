import React from 'react';
import {Link} from 'gatsby';
import {Navbar, Nav} from 'react-bootstrap'

import styles from './styles.module.css';

export default function Header() {
  return (
    <Navbar expand="sm" className={styles.header} > 
      <Navbar.Brand><Link className={styles.home} to="/">BD</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.collapsedButton}>
        <img src="icon.png" width="30" height="30" alt="Home"/>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className={styles.buttons}>
        <Nav className="ml-auto">
          <Nav.Item className={styles.button}>
            <Link className={styles.link} to="/about">About</Link>
          </Nav.Item>  
          <Nav.Item className={styles.button}>
            <Link className={styles.link} to="/contact">Contact</Link>
          </Nav.Item>  
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


