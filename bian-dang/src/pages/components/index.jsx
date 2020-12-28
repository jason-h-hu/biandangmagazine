import React from 'react';

import Page from '../../components/page';
import textStyles from '../../components/text.module.css';

export default function Bing() {
  return (
    <Page title="Components">
      <div className={textStyles.headerLg}>Header Lg</div>
      <br/>
      <div className={textStyles.headerMd}>Header Md</div>
      <br/>
      <div className={textStyles.headerSm}>Header Sm</div>
      <br/>
      <div className={textStyles.headerXs}>Header Xs</div>
      <br/>
      <div className={textStyles.byLine}>by This Is A ByLine</div>
      <br/>
      <div className={textStyles.bodyText}>This is body text with a variety of styles like <em>italicized text that looks like this</em> or <b>bolded text that looks like this</b> or even <a href="/">a hypertext within the body which looks like this</a></div>
      <br/>
      <div className={textStyles.poetryText}>This might demonstrate</div>
      <div className={textStyles.poetryText}>The layout of a poem.</div>
      <div className={textStyles.poetryText}>I hope it looks good.</div>
      <br/>
      <div className={textStyles.captionText}>This is the style for a caption, which can be used to accompany photos or illustrations. </div>
      <br/>
      <div className={textStyles.labelText}>This is label text</div>
      <br/>
      <div className={textStyles.ingredientListText}>These are</div>
      <div className={textStyles.ingredientListText}>List Items</div>
      <div className={textStyles.ingredientListText}>In A Recipe</div>
      <br/>
    </Page>
  );
}
