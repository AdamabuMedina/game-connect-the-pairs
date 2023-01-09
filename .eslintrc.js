module.exports = {
  root: true,
  extends: ["airbnb-base"],
  env: {
    browser: true,
  },
  indent: [2],
  rules: {
    "no-alert": 0,
    "no-param-reassign": [2, { props: false }],
    "no-plusplus": 0,
    "no-iterator": 0,
    "no-restricted-syntax": [2, "WithStatement"],
    "func-style": 0,
    quotes: [2, "double", { avoidEscape: true }],
  },
}
