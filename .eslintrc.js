module.exports = {
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "standard-with-typescript",
    '@loopback/eslint-config'
  ],
  "rules": {
    // Note: you must disable the base rule as it can report incorrect errors
  }
};
