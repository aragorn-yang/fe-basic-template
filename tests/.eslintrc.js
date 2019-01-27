module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      // jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    // mocha: true,
    jest: true,
  },
  rules: {
    // semi: 2,
  },
};
