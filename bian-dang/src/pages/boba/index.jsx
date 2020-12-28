import React from 'react';

import Page from '../../components/page';
import Gallery from '../../components/content/gallery';

export default function Boba() {
  return (
    <Page title="Boba" nextPost="/ceramics" previousPost="/bing_recipe" volume="/">
      <Gallery 
        title="Boba" 
        author="Jessica Lin"
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        images={[
          {resource: 'boba_1.jpg', caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
          {resource: 'boba_2.jpg', caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
          {resource: 'boba_3.jpg', caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        ]}
      />
    </Page>

  );
}
