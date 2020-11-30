import main from '../'

describe('main config', () => {
  it('extends files', () => {
    const expected = [
      'airbnb',
      'lwintch-wyze/base',
      'lwintch-wyze/rules/react',
      'lwintch-wyze/rules/react-a11y',
    ]

    expect(main.extends).toEqual(expected)
  })
})
