<p align="center">
  <img src="/logo.png" alt="Stylelint" width="400px"/>
</p>

# Stylelint

Basic ESLint and Prettier config to js projects

## Install

`yarn add --dev @codar/eslint-plugin`

## Usage

Create `.elsintrc` file:

```js
{
  extends: ['plugin:@codar/react']
}
```

and create a `prettier.config.js` file:

```js
module.exports = require('@codar/eslint-plugin/prettier.config')
```
