// Eslint Herokey configs
// version: 1.0.0

module.exports = {
  // Environments your script is designed to run in.
  // Each environment brings with it a certain set of predefined global variables.
  // DOCS: https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-environments
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // Predefined configs
  // DOCS: https://eslint.vuejs.org/user-guide/#usage
  extends: [
    // DOCS: https://github.com/eslint/eslint/blob/main/conf/eslint-recommended.js
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/recommended',
    // ***
    // Uncomment: for Nuxt applications
    // 'plugin:nuxt/recommended',
  ],
  // The additional global variables your script accesses during execution.
  // DOCS: https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-globals
  globals: {
    // ***
    // Uncomment: for the globals mentioned in the application
    // google: 'readonly',
    // HerokeyPaymentApp: 'readonly',
    // $nuxt: 'readonly',
    // dataLayer: 'readonly',
    // ga: 'readonly',
    // _: 'readonly'
    // Atomics: 'readonly',
    // SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'no-param-reassign': [2, { props: false }],
    'no-shadow': [0, { hoist: 'all' }],
    'no-plusplus': 0,
    radix: 0,
    'no-return-assign': 0,
    'no-prototype-builtins': 0,
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'vue/require-prop-type-constructor': 'off',
    'no-bitwise': ['error', { allow: ['|'] }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5,
        multiline: 1,
      },
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below',
      },
    ],
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true,
      },
    ],
    'vue/no-v-html': 0,
    'vue/no-v-text-v-html-on-component': 0,
    'vue/no-reserved-component-names': 0,
    'vue/multi-word-component-names': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue'],
        moduleDirectory: ['node_modules', 'app/javascript'],
      },
    },
  },
};
