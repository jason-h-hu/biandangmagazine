import React from 'react';
import {Link} from 'gatsby';
import {Navbar, Nav} from 'react-bootstrap'

import Icon from '../icon';
import Logotype from '../logotype';
import styles from './styles.module.css';

export default function Header() {
  return (
    <Navbar expand="md" className={styles.header} > 
      <Navbar.Brand><Link className={styles.home} to="/"><Logotype size="medium"/></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.collapsedButton}><Logotype size="small"/></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className={styles.buttons}>
        <Nav className="ml-auto">
          <Nav.Item className={styles.collapsedHomeButton}>
            <Link className={styles.link} to="/">Home</Link>
          </Nav.Item>
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


