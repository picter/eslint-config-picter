module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': [
        '**/*.spec.js',
        '**/*.story.js',
        '**/*.stories.js',
        '**/__test-helpers__/**/*',
      ]
    }],
    'import/prefer-default-export': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-unused-prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
  },
};
