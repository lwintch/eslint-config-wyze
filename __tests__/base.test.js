import base from '../base'

describe('base config', () => {
  it('extends files', () => {
    const expected = [
      'airbnb/base',
      'plugin:wyze/recommended',
      'lwintch-wyze/rules/best-practices',
      'lwintch-wyze/rules/es6',
      'lwintch-wyze/rules/import',
      'lwintch-wyze/rules/legacy',
      'lwintch-wyze/rules/style',
    ]

    expect(base.extends).toEqual(expected)
  })

  it('specifies plugins', () => {
    const expected = [
      'eslint-comments',
      'import',
      'wyze',
    ]

    expect(base.plugins).toEqual(expected)
  })

  it('sets parserOptions correcty', () => {
    const expected = {
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
      },
      ecmaVersion: 2017,
      sourceType: 'module',
    }

    expect(base.parserOptions).toEqual(expected)
  })
})
