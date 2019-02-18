module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  overrides: [
    {
      files: ['constants.js', 'utils.js'],
      rules: {
        'import/prefer-default-export': 0,
      },
    },
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.spec.js',
          '**/*.story.js',
          '**/*.stories.js',
          '**/__test-helpers__/**/*',
          '**/__tests__/**/*',
          '**/setupTests.js',
        ],
      },
    ],
    'import/no-named-as-default': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
  },
}
