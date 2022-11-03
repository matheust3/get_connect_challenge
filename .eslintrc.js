module.exports = {
  extends: [
    '@loopback/eslint-config',
    "standard",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "standard-with-typescript"
  ],
  "rules": {
    // Note: you must disable the base rule as it can report incorrect errors
  }
};
