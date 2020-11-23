import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

import Layout from '../../components/layout';
import Article from '../../components/article';

export default function Bing() {
  return (
    <Layout title="Bing">
      <Article title="Bing" author="Jason Hu">
        <p>
          Around the corner from my grandmother’s place in Taipei is a typical breakfast joint. Open for just the morning, it serves up standard fare like fresh soy milk with youtiao. It is fast and cheap for the busy commuter. There are hundreds of Taiwanese breakfast places like it scattered throughout the capital, with even more food carts parked in alleyways and corners, all ready to feed the waking city. Every time I visit, I always order a <em>hujiao bing</em>: a leavened roll, layered with green onion and black pepper. It’s greasy, crispy, and soft—the perfect vehicle for a fried egg.
        </p>
        <p>
          In the spring of 2020, as the horizon of the pandemic slid from weeks to months to the indefinite future, I decided to recreate this bing in my apartment kitchen. There is, after all, a nostalgic reassurance in the overlap of stress baking and comfort food. Yet when I searched for a recipe online, I found nothing. Instead, I got page after page about another bing of the exact same name. For other people, hujiao bing means spiced pork buns at night markets with family. And damn, these bing looked pretty good: Pulled freshly out of a clay oven, a bite yields succulent filling and a piping hot crust. From Buzzfeed Video to Anthony Bourdain, people were starting to notice, and the internet was awash in praise for these food stalls tucked under the neon signs of the Raohe Night Market. 
        </p>
        <p>
          Yet my own breakfast bing, the hujiao bing that I remembered, was nowhere to be found. How do you recreate a dish when all you have is your own memory, and a name that points to someone else’s nostalgia?
        </p>
        <p>
          The duo of sesame and scallions constantly echoes throughout Chinese regional baking, whether in the ubiquitous scallion pancake or the sesame <em>da bing</em> of Muslim Mandarin food. Any combination of “green onion”, “bing”, and “rolls” yields a surprising variety of videos on YouTube, as if the algorithm is procedurally generating scallion-based bings. The landscape of bing could be as big or little, flaky or tender, crispy or chewy as I wanted. Bing is not a discrete dish but a spectrum, and mine was just a dot in this space of textures and memories.
        </p>
        <p>
          Memories, after all, aren’t photographic recollection, but rather constant creation. For my bing, this would be especially literal. If I couldn’t find a recipe, I would have to create one myself out of the proximal examples. In a video touring a Taipei diner, an old shopkeeper pulls the dough in a long coil, shaping the laminations of spice and onion. On one blog, a recipe for da bing adds rice flour to the dough, to lend chewiness without toughness. On another, a recipe for <em>cong juan</em> brushed the top with simple syrup, to carmelize into a golden brown while baking. The midpoint between all of these yielded something new—an imperfect recreation of the bing at the corner of Nanshan Road—but also something warm, peppery, and familiar.        
        </p>
      </Article>
    </Layout>
  );
}
