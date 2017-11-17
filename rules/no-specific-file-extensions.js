'use strict';

const path = require('path');

const DEFAULTS = {
  extensions: ['.jsx']
};

module.exports = {
  meta: {
    docs: {
      description: 'Restrict specific file extensions',
      category: 'Best Practices',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        extensions: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {
    function getExtensionsConfig() {
      return context.options[0] && context.options[0].extensions || DEFAULTS.extensions;
    }

    return {
      Program: function(node) {
        const filename = context.getFilename();

        if (filename === '<text>') {
          return;
        }

        const extension = path.extname(filename);
        const allowedExtensions = getExtensionsConfig();
        const isRestrictedExtension = allowedExtensions.includes(extension);

        if (!isRestrictedExtension) {
          return;
        }

        context.report({
          node: node,
          message: `File extension '${extension}' not allowed.`
        });
      }
    };
  }
};