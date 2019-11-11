<p align="center">
  <img src="/logo.png" alt="Stylelint" width="400px"/>
</p>

# Stylelint

Basic ESLint and Prettier config to js projects

## Install

`yarn add --dev @codar/eslint-plugin eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-react eslint-plugin-json`

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

# License

Licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
