const prettier = require('./prettier.config.js')

module.exports = {
  configs: {
    react: {
      parser: 'babel-eslint',
      extends: [
        'eslint:recommended',
        'plugin:json/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
      ],

      env: {
        es6: true,
        node: true,
      },
      rules: {
        'comma-dangle': [
          'error',
          {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
          },
        ],
        'react/prop-types': [2, { skipUndeclared: true }],
        'prettier/prettier': ['error', prettier],
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  },
}
