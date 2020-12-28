import React from 'react';

import Page from '../../components/page';
import Article from '../../components/content/article';

export default function Bao() {
  return (
    <Page title="Bao" nextPost='/bing' previousPost='/ceramics' volume="/">
      <Article title="Bao" author="Carolyn Huang">
        <p>
          Nestled in a brimming platter<br/>
          Swaddled in curling steam<br/>
          A tumble of 生煎包<br/>
          cradle a family dream<br/>
        </p>
        <p>
          Once a carrying mother’s craving <br/>
          Now a little one’s favorite dish<br/>
          From 老家 to new beginnings<br/>
          A stuffed soup pocket wish<br/>
        </p>
        <p>
          小幸福寶寶<br/>
          Comfort in every bite<br/>
          Fluffy dumpling bundles<br/>
          一口充滿愛<br/>
        </p>
      </Article>
    </Page>

  );
}
