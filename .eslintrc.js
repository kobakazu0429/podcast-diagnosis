module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'plugin:vue/essential'],
  plugins: ['vue'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off',
    'linebreak-style': ['error', 'unix'],
    indent: [0, 'space'],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
