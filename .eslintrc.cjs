module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ['vue'],
  rules: {
    'import/extensions': 0,
    'no-unused-vars': 1,
  },
}
