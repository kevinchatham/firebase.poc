import globals from 'globals';
import tsParser from '@typescript-eslint/parser'; // Add the parser for TypeScript
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({ resolvePluginsRelativeTo: '.' });

export default [
  {
    files: ['**/*.{ts}'],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser, // Use TypeScript parser
    },
    rules: {
      'no-console': 'error', // Disallow console statements
      '@typescript-eslint/explicit-function-return-type': 'error', // Ensure explicit return types
    },
  },
  ...compat.extends('plugin:@typescript-eslint/recommended'),
];
