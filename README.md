# Background
This is the source code for the biandangmagazine.com. This was built using [gatsby](https://www.gatsbyjs.com/). 

# Local Development
To get a local instance of this running, run the following in the terminal, in this repo:
```
npm add
gastby develop
```
You only need to run `npm add` once. Subsequently, you only need to run `gatsby develop`, provided you don't make any edits to change the modules.

Then you should visit `http://localhost:8000`

# Deployment
You should run `gatsby build` to build the static assets. Those can be hosted wherever you prefer. We hosted this on AWS S3, with NameCheap as our DNS. To do so, we followed [this tutorial](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/static-website-hosting.html)

# TODO
## Developer Productivity
- [ ] Adding eslint
- [ ] Adding prettier
- [ ] Integrating this with S3 Cli, for continuous deployment

## Refactors
- [ ] The "night mode" is currently hacked out, where a subset of components are eached passed in a `boolean` to indicate whether to render as night or regular mode. We need to rethink how we handle styling, such that this is more scalable. 

## Features
- [ ] We should conform to Gatsby best practices, and have all content be served by a GraphQL layer. This means separating all the content from the code
- [ ] We also need to add a CMS system
- [ ] Adding a comment system