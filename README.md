# Starter Theme

> **Starter Theme and [Slate v1](https://github.com/Shopify/slate) 

Starter Theme represents the Shopify Themes Team's opinionated starting point for new Slate theme projects. It strives to include up-to-date best practices and solutions that we have deemed needed for the majority of themes we build. It is a reflection of what’s possible when building a theme!

## System requirements

You'll want to ensure you have the following already installed on your local machine before getting started with Starter theme:

- **Node:** The current LTS (long-term support) release. We like to use a Node Version Manager like [NVM](https://github.com/creationix/nvm).

- **NPM 5+ or Yarn:** Both of these package managers have [ups and downs](https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/), choose whichever you prefer. Follow the installation instructions [for Yarn](https://yarnpkg.com/en/docs/install) or [NPM](https://www.npmjs.com/get-npm) to make sure you're using the latest version.

## Getting started

Make sure you have created a self-signed SSL certificate;
[How to guide here](https://shopify.github.io/slate/docs/create-a-self-signed-ssl-certificate)

To install node_modules, run the following command in your terminal:

```
$ yarn install
```

To get started, run the following command in your terminal:

```
$ yarn start
```

To skip first deployment and watch for file updates, run the following command in your terminal:

```
$ yarn watch
```


To deploy to be viewable by other users, run the following command in your terminal:

```
$ yarn deploy
```

## Terminal errors 

How to fix the error message in slate
Update the return Axios code in the slate-analytics/index.js file.
node_modules/@shopify/slate-analytics/index.js
Update the code in line 95
return axios('https://v.shopify.com/slate/track', axiosConfig).catch(() => {});

## Node version 

v10.18.1


