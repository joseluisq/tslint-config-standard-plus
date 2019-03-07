# TSLint Config Standard Plus :green_apple:

[![Build Status](https://travis-ci.org/joseluisq/tslint-config-standard-plus.svg?branch=master)](https://travis-ci.org/joseluisq/tslint-config-standard-plus) [![npm](https://img.shields.io/npm/v/tslint-config-standard-plus.svg)](https://www.npmjs.com/package/tslint-config-standard-plus) [![npm](https://img.shields.io/npm/dt/tslint-config-standard-plus.svg)](https://www.npmjs.com/package/tslint-config-standard-plus) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> A [TSLint config](https://palantir.github.io/tslint/usage/tslint-json/) for [JavaScript Standard Style](http://standardjs.com/) with a plus of useful rules.

This [TSLint config](https://palantir.github.io/tslint/usage/tslint-json/) contains [JavaScript Standard Style](http://standardjs.com/) rules as well as a set of additional rules that will help you with syntactic & semantic checks of your TypeScript source code.

*__Note:__ This repo exists thanks to these __awesome__ [TSLint](https://palantir.github.io/tslint/) config projects listed below :tada:*

## Rules

- :1st_place_medal: [standardjs](http://standardjs.com/) — inspiration
- :1st_place_medal: [dcl-tslint-config-standard](https://github.com/decentraland/dcl-tslint-config-standard) — current fork
- :1st_place_medal: [tslint-config-standard](https://github.com/blakeembrey/tslint-config-standard) — dcl-tslint fork
- :medal_sports: [tslint-clean-code](https://github.com/Glavin001/tslint-clean-code) — __current dependency__
- :medal_sports: [tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules) — __current dependency__
- :medal_sports: [tslint-no-circular-imports](https://github.com/bcherny/tslint-no-circular-imports) — __current dependency__

See all rules in [tslint.js](./tslint.js) file and one example at [hyperapp-starter](https://github.com/joseluisq/hyperapp-starter) source code.

## Install

[Yarn](https://github.com/yarnpkg/)

```sh
yarn add tslint-config-standard-plus --dev
```

[NPM](https://www.npmjs.com/)

```sh
npm install tslint-config-standard-plus --save-dev
```

## Usage

In your `tslint.json` file:

```json
{
  "extends": "tslint-config-standard-plus"
}
```

### Overwrite rules

If you want to overwrite some specific rules add `"rules"` section after `"extends"`.

```json
{
  "extends": "tslint-config-standard-plus",
  "rules": {
    "no-any": false
  }
}
```

### Recommended

- Add `"strict": true` to your `tsconfig.json` to enables all [strict type checking options](https://www.typescriptlang.org/docs/handbook/compiler-options.html).
- Add `"noUnusedLocals": true` & `"noUnusedParameters": true` to your `tsconfig` - [tslint no-unused-variable rule doesn't report warnings any more?](https://github.com/Microsoft/vscode-tslint/blob/master/tslint/README.md#the-tslint-no-unused-variable-rule-doesnt-report-warnings-any-more)
- Read [Microsoft announce about deprecation of vscode-tslint](https://github.com/Microsoft/vscode-tslint/blob/master/tslint/README.md#faq)

## Contributions

Feel free to send some [Pull request](https://github.com/joseluisq/tslint-config-standard-plus/pulls) or [issue](https://github.com/joseluisq/tslint-config-standard-plus/issues).

## License

MIT license

© 2018-present [Jose Quintana](http://git.io/joseluisq)
