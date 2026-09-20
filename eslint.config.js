import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist/**', 'node_modules/**'] },
  js.configs.recommended,
  { rules: { 'no-irregular-whitespace': ['error', { skipStrings: true, skipTemplates: true }] } },
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        document: 'readonly',
        URL: 'readonly',
        window: 'readonly',
      },
    },
  },
);
