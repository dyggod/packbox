module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    // project: ['./tsconfig.json'],
    // tsconfigRootDir: __dirname,
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
  },
};
