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
        '**/*.spec.jsx',
        '**/*.stories.jsx',
        '**/__test-helpers__/**/*',
      ]
    }],
    'import/prefer-default-export': 0,
    'jsx-quotes': [2, 'prefer-single'],
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-unused-prop-types': 0,
    'react/forbid-prop-types': 0,
  },
};
