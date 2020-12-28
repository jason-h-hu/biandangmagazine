import React from 'react';

import Page from '../../components/page';
import Recipe from '../../components/content/recipe';

export default function Bing() {
  return (
    <Page title="Hujiao Bing" nextPost="/boba" previousPost="/bing" volume="/">
      <Recipe 
        title="Hujiao Bing" 
        translation="胡椒餅"
        author="Jason Hu"
        // metadata
        yieldAmount="12-16 bing" 
        prepTime="1 hours active, 6 hours passive"
        // ingredients
        ingredientSections={[
          {
            sectionTitle: "For the Dough",
            ingredients: [
              {quantity: '440', unit: 'g', name: 'all-purpose flour'},
              {quantity: '160', unit: 'g', name: 'glutinous rice flour'},
              {quantity: '300', unit: 'g', name: 'warm water'},
              {quantity: '4', unit: 'tbsp', name: 'vegetable oil'},
              {quantity: '4', unit: 'tbsp', name: 'sugar'},
              {quantity: '1', unit: 'tbsp', name: 'salt'},
              {quantity: '1', unit: 'tsp', name: 'dry active yeast'},
            ]
          },
          {
            sectionTitle: "For the Filling",
            ingredients: [
              {quantity: '2', unit: 'bunches', name: 'scallions', modifier: 'white and greens finely chopped'},
              {
                quantity: '4', 
                unit: 'tbsp', 
                name: 'vegetable shortening', 
                note: 'Lard and other animal fats will taste better if you’ve got it, and you can use vegetable oil, in a pinch.'
              },
              {quantity: '2-4', unit: 'tbs', name: 'black pepper', modifier: 'ground'},
              {quantity: '⅓', unit: 'cup', name: 'sesame seeds'},
              {quantity: '1', unit: 'tsp', name: 'simple syrup'},              
            ],
            note: "All of the fillings are a rough ballpark. You can scale up or down to taste.",
          }
        ]}
        steps={[
          {
            name: 'Activate the yeast',
            description: 'Mix a couple of spoonfuls of the flour with the yeast, and combine with the hot water to make a thin slurry. Let this sit until bubbles start to form in roughly 10 minutes.',
          },
          {
            name: 'Make the dough',
            description: (
              <div>
                <div>Combine the slurry with the other ingredients, and then knead the dough by hand for roughly 10-15 minutes, until the dough is very smooth and stretchy. Place the dough inside a lightly oiled work-bowl, large enough to accommodate a doubling in size.</div>
                <div>Cover and seal the bowl with plastic wrap, and leave at room temperature to rise for four hours, or in the fridge overnight. If you’re in a rush, the dough can be set in a very warm spot to complete the rise in as little as an hour and a half.</div>
              </div>                
            ),
            note: 'While it’s tempting to skip the manual work and use a no-knead approach, it’s important that the dough is bouncy and stretchy before we start the rise. As the yeasts start producing carbon dioxide, we need a well-developed gluten matrix to trap and isolate the gases. Otherwise, the bubbles aggregate together, resulting in cavernous, airy interiors more akin to a baguette or focaccia.',
          },
          {
            name: 'Roll out the dough',
            description: (
              <div>
                <div>The dough is ready once it has doubled in size. Punch it down to deflate, and then turn it out onto a lightly floured surface. To prepare it for rolling, we need to form the dough into a rough rectangular shape: Flatten it by hand, tri-fold the dough horizontally like a letter, flatten it again, and then finish by tri-folding the dough vertically.</div>
                <div>You’re now ready to roll out the dough: With a large rolling pin, roll the dough to 8” by 24”. The exact measurements don’t matter since the dough will continue to be shaped and stretched  later—just try to keep it a rough rectangle.</div>
              </div>
            ),
            note: 'When I first started baking, I was confused by why we deflated the dough—didn’t we just spend all this time getting it to rise? This came from a misunderstanding about the purpose of yeast: Strictly speaking, they aren’t here to directly provide the volume, but rather speckle the dough with billions of microscopic bubbles. In the oven, the sudden vaporization of water and alcohol inflates these bubbles like a balloon, and it’s this steam that provides the volume and lift for the final baked good. Controlling the distribution and size of these bubbles is how we control the final texture. Deflating and folding the dough prevents any uneven gas distribution from fermentation.',
          },
          {
            name: 'Fill and laminate the dough',
            description: 'Generously brush the sheet of dough with melted shortening, then sprinkle with black pepper and scallions. It should seem excessively covered with scallion. Do a horizontal tri-fold to create the layers: All the filling should be enveloped.',
          },
          {
            name: 'Shape the bing',
            description: 'With the seam facing down toward the surface, start stretching the dough to its final length. Stretch the dough interval by interval along the length of the dough. Take your time—if the dough feels like it’s going to snap, let it rest for 10-15 minutes to loosen up. The end result should be roughly 42” long. ',
          },
          {
            name: 'Finishing touches',
            description: (
              <div>
                <div>Flatten the rolls to be 4” wide and ½” thick: This will define the final dimensions of the bing. Brush the top with the simple syrup, then sprinkle with the sesame seeds. Gently press the seed in with your fingers. Finally, brush on another coat of melted shortening. </div>
                <div>Let the dough rest for 15 minutes before portioning. Trim the two ends if they’re irregular, and then cut the dough into 3” wide bing. Set them on a greased sheet pan with the edges barely touching each other.</div>
              </div>
            ),
          },
          {
            name: 'Baking',
            description: (
              <div>
                <div>Bake in a 425°F oven on the top shelf for 12 minutes. Remove from the oven, and brush the top of the bing with another coat of melted shortening. Return the tray to the oven on the broil setting for 8 minutes, until it has developed a deep, golden color.</div>
                <div>Let it cool for 10-30 minutes before eating.</div>
              </div>
            ),
            note: 'Keep a close eye on its progress since every broiler is different. If it seems like it’s taking on too much color, drop the temperature back to 425°F, and finish in the oven such that it’s had a total cook time of 20 minutes.',
          },
        ]}
      />
    </Page>
  );
}