import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'public/**',
      'coverage/**',
      '.husky/**',
      'next-env.d.ts',
      'aws.deploy.main.yaml',
      'jkenv.json',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  {
    files: ['**/*.{ts,tsx,js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // React
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'react/prop-types': 'off',
      // TypeScript (ported from legacy .eslintrc.json)
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', caughtErrors: 'none' }],
      // Core
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'no-empty-pattern': 'off',
      'no-empty-function': 'off',
      'no-global-assign': 'warn',
    },
  },
  eslintConfigPrettier,
)
