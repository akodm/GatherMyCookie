module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    "arrow-body-style": "off",
    "no-console": "off",
    "no-nested-ternary": "off",
    "no-use-before-define": "off",
    "no-undef": "off",
    "no-unused-expressions": "warn",
    "no-restricted-imports": "warn",
    "no-shadow": "off",
    "no-unused-vars": "off",
    "class-methods-use-this": "off",
    "lines-between-class-members": "off",
    "object-curly-spacing": ["error", "always"],
    "semi": ["error", "always"],
    "no-extra-semi": "error",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "no-empty": "warn",
    "comma-dangle": ["warn", "never"],
    "init-declarations": ["error", "always"],
    "max-len": ["warn", { "code": 120 }],
    "quotes": ["warn", "double", "avoid-escape"],
    "jsx-quotes": ["warn", "prefer-double"],
    "quote-props": ["warn", "as-needed"],
    "sort-imports": "off",
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/jsx-one-expression-per-line": ["off", { "allow": "none" }]
  }
};
