module.exports = {
  extends: [
    'airbnb/base',
    'plugin:lwintch-wyze/recommended',
    'lwintch-wyze/rules/best-practices',
    'lwintch-wyze/rules/es6',
    'lwintch-wyze/rules/import',
    'lwintch-wyze/rules/legacy',
    'lwintch-wyze/rules/style',
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: [
    'eslint-comments',
    'import',
    'wyze',
  ],
}
