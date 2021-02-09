import React from 'react';

import Page from '../../components/page';
import Gallery from '../../templates/gallery';
import ceramicsImage from './ceramics.jpg';

export default function Ceramics() {
  return (
    <Page title='Bowl' nextPost='/bao' previousPost='/boba' volume="/">
      <Gallery 
        title='Bowl' 
        description='The overlap of my identity as a Taiwanese American, an illustrator, an amateur ceramicist, and someone who loves to eat 😋'
        author='Jane Li'
        images={[{resource: ceramicsImage, alt: ''}]}
      />
    </Page>

  );
}
