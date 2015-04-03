import React from 'react';

import Page from '../../components/page';
import Gallery from '../../templates/gallery';

import boba1 from './boba_1.jpg';
import boba2 from './boba_2.jpg';
import boba3 from './boba_3.jpg';

export default function Boba() {
  return (
    <Page title="Boba" nextPost="/bowl" previousPost="/bing_recipe" volume="/">
      <Gallery 
        title="Boba" 
        author="Jessica Lin"
        description="Since growing up as a third culture kid in Singapore, I have always had a mixed sense of “home.” Maybe because the things I love are spread across the globe: my family's in Taiwan, my memories are in Singapore, and my core is in San Francisco. However, throughout the years, I have found a constant familiarity in the simplest comfort: bubble tea. Or boba tea. Or pearl milk tea. Or 珍珠奶茶. Just like how this deliciously satisfying drink has different names in different places, the way boba fit into my life evolved through time and life phases."
        images={[
          {resource: boba1, caption: 'As a child in Singapore, bubble tea was accompanied by a fresh pandan waffle after school. It was a walk in the warm tropical rain. It was grocery shopping with my mom, zoning out to the beeping of the cashiers after a long dance practice.'},
          {resource: boba2, caption: 'As a college student in Los Angeles, boba was late night drives to San Gabriel Valley. It was fundraisers for clubs and culture nights. It was aimlessly walking around Sawtelle with friends, wondering where the heck we would all end up after graduation.'},
          {resource: boba3, caption: 'As an adult in San Francisco, boba is the constant struggle to find equilibrium. It is finding creativity in everything I see and do. It is a bittersweet reminder of just how far away I am from home.'},
        ]}
      />
    </Page>

  );
}
