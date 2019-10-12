# Breadcrumbs Theme

> **Breadcrumbs has been built using Shopifys starter Theme [Slate v1](https://github.com/Shopify/slate) use this documentation for setup**

## Intentional lack of styles

When launching Starter Theme for the first time, you may notice a lack of CSS styles. Is Starter Theme broken? Definitely not! Keep in mind this was done intentionally. Starter Theme is not a framework but rather a starting point for your project. It contains all the files the Shopify Themes team considers to be the bare essentials to building a Shopify theme.

> **When styling the theme start by creating Page.style-guide and setting up all of the brand styling**

For templates and snippets, standard Liquid tags and logic have been included with little to no markup, classes, or other code that you will need to remove. The [`src/styles/theme.scss`](https://github.com/Shopify/starter-theme/blob/master/src/assets/styles/theme.scss) file contains extremely limited styling to not get in the way of developers' CSS preferences. The JavaScript files contain most of our [helper scripts](https://github.com/Shopify/theme-scripts/tree/master/packages) and [lazysizes](https://github.com/aFarkas/lazysizes) for responsive image lazy loading.

## Development requirements

When developing it's easiest to use VScode. Make sure you have installed ESLint and STYLElint extensions:

- **Stylelint:** All styles should follow the STYLElint guidelines

- **ESlint:** All styles should follow the ESlint guidelines

** There is still a lot of ESLint and STYLElinting updates required

## System requirements

You'll want to ensure you have the following already installed on your local machine before getting started with Starter theme:

- **Node:** The current LTS (long-term support) release. We like to use a Node Version Manager like [NVM](https://github.com/creationix/nvm).

- **NPM 5+ or Yarn:** Both of these package managers have [ups and downs](https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/), choose whichever you prefer. Follow the installation instructions [for Yarn](https://yarnpkg.com/en/docs/install) or [NPM](https://www.npmjs.com/get-npm) to make sure you're using the latest version.

## Getting started

To get started with Starter Theme, run the following command in your terminal:

```
$ yarn install
```

## Commands

To upload the whole theme and start watching run

```
$ yarn start
```

To just watch and update you theme files run

```
$ yarn watch
```

To deploy the theme for other users to preview run

```
$ yarn deploy
```

For more information on connecting your new project with a Shopify store, see the [Slate docs](https://github.com/Shopify/slate/wiki/3.-Connect-to-your-store).

