# TSLint Config Standard Plus :green_apple::orange::lemon:

[![Build Status](https://travis-ci.org/joseluisq/tslint-config-standard-plus.svg?branch=master)](https://travis-ci.org/joseluisq/tslint-config-standard-plus) [![npm](https://img.shields.io/npm/v/tslint-config-standard-plus.svg)](https://www.npmjs.com/package/tslint-config-standard-plus) [![npm](https://img.shields.io/npm/dt/tslint-config-standard-plus.svg)](https://www.npmjs.com/package/tslint-config-standard-plus) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> A [TSLint config](https://palantir.github.io/tslint/usage/tslint-json/) for [JavaScript Standard Style](http://standardjs.com/) with a plus of useful rules.

__Note:__ This config exists thanks to these __awesome__ [TSLint](https://palantir.github.io/tslint/) config projects listed below :tada:

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

### Recommended

Add `"strict": true` to your `tsconfig.json` to enables all [strict type checking options](https://www.typescriptlang.org/docs/handbook/compiler-options.html).

### Overwrite rules

If you want to overwrite some specific rule add `"rules" section after` `"extends"`.

```json
{
  "extends": "tslint-config-standard-plus",
  "rules": {
    "no-any": false
  }
}
```

## Contributions

Feel free to send some [Pull request](https://github.com/joseluisq/tslint-config-standard-plus/pulls) or [issue](https://github.com/joseluisq/tslint-config-standard-plus/issues).

## License

MIT license

© 2018 [José Luis Quintana](http://git.io/joseluisq)
