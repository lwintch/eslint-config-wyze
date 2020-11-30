module.exports = {
  extends: [
    'wyze',
    'lwintch-wyze/rules/preact',
  ],
  settings: {
    react: {
      createClass: 'h',
      pragma: 'preact',
      version: '6.0',
    },
  },
}
