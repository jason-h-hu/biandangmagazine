import React from 'react';

import Page from '../../components/page';
import Gallery from '../../templates/gallery';
import ceramicsImage from './ceramics.jpg';

export default function Ceramics() {
  return (
    <Page title='Bowl' nextPost='/bao' previousPost='/boba' volume="/">
      <Gallery 
        title='Bowl' 
        description='In addition to illustration and design, for the last year or so, I’ve also been learning how to make ceramics. Taiwanese food is often served in porcelain dishes, so I’ve picked out a few of my favorite dishes to represent as porcelain. Presented together, this piece is a reflection of my identity as a Taiwanese American, an illustrator, an amateur ceramicist, and someone who loves to eat.'
        author='Jane Li'
        images={[{resource: ceramicsImage, alt: ''}]}
      />
    </Page>

  );
}
