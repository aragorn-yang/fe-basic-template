module.exports = {
  root: true, // 只在项目根配置中使用
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    // mocha: true,
    // jest: true,
  },
  rules: {
    // semi: 2,
  },
};
