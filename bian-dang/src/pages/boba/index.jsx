import React from 'react';

import Page from '../../components/page';
import Gallery from '../../templates/gallery';

import boba1 from './boba_1.jpg';
import boba2 from './boba_2.jpg';
import boba3 from './boba_3.jpg';

export default function Boba() {
  return (
    <Page title="With boba, half sweet" nextPost="/bowl" previousPost="/bing_recipe" volume="/">
      <Gallery 
        title="With boba, half sweet" 
        author="Jessica Lin"
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        images={[
          {resource: boba1, caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
          {resource: boba2, caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
          {resource: boba3, caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        ]}
      />
    </Page>

  );
}
