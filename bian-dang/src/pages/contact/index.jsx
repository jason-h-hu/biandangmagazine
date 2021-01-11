import React from 'react';
import {Form, Button} from 'react-bootstrap'

import Page from '../../components/page';
import textStyles from '../../css/text.module.css';
import styles from './styles.module.css';

export default function Contact() {
  return (
    <Page title="Contact">
      <div className={styles.contact}><span className={textStyles.headerLg}>Contact Us</span></div>
      <div className={textStyles.bodyText}>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className={textStyles.headerXs}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formComments">
          <Form.Label className={textStyles.headerXs}>Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="What’s on your mind?" />
        </Form.Group>
        <Button block className={styles.submitButton}>Submit</Button>
      </Form>
      </div>
    </Page>
  );
}
