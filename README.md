# TSLint Config Standard Plus :green_apple:

[![Build Status](https://travis-ci.com/joseluisq/tslint-config-standard-plus.svg?branch=master)](https://travis-ci.com/joseluisq/tslint-config-standard-plus) [![npm](https://img.shields.io/npm/v/tslint-config-standard-plus.svg)](https://www.npmjs.com/package/tslint-config-standard-plus) [![npm](https://img.shields.io/npm/dt/tslint-config-standard-plus.svg)](https://www.npmjs.com/package/tslint-config-standard-plus) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> A [TSLint config](https://palantir.github.io/tslint/usage/tslint-json/) for [JavaScript Standard Style](http://standardjs.com/) with a plus of useful rules.

__TSLint Config Standard Plus__ contains a [JavaScript Standard Style](http://standardjs.com/) rules as well as a set of additional rules that will help you with syntactic & semantic checks of your TypeScript code in development.

## Features

- [Typescript Standard Style](https://github.com/blakeembrey/tslint-config-standard) by [StandardJS](https://standardjs.com/) rules set.
- [Clean Code](https://github.com/Glavin001/tslint-clean-code#supported-rules) rules set. *__(plus)__*
- [TSLint-ESLint](https://github.com/joseluisq/tslint-config-standard-plus/blob/master/tslint.json#L189) additional rules set. *__(plus)__*
- [no-circular-imports](https://github.com/bcherny/tslint-no-circular-imports) rule. *__(plus)__*
- Small because only exports a [tslint.json](./tslint.json).
- [VS Code User Workspace](https://code.visualstudio.com/docs/getstarted/settings) pre-configured and ready to use.

### Config Standard Plus Legacy

Optional tslint config ([tslint.legacy.json](./tslint.legacy.json)) that extends from default [tslint.json](./tslint.json) but with additional rules overwritten:

- Enforce consistent spaces like the default config.
- Enforce "double" quotes instead of 'single' ones.
- Enforce 4 space indentation instead of 2.

## Rules

*This repo exists thanks to these __awesome__ [TSLint](https://palantir.github.io/tslint/) config projects listed below :tada:*

- :1st_place_medal: [standardjs](https://standardjs.com/) — inspiration
- :1st_place_medal: [dcl-tslint-config-standard](https://github.com/decentraland/dcl-tslint-config-standard) — current fork
- :1st_place_medal: [tslint-config-standard](https://github.com/blakeembrey/tslint-config-standard) — dcl-tslint fork
- :medal_sports: [tslint-clean-code](https://github.com/Glavin001/tslint-clean-code) — __current dependency__
- :medal_sports: [tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules) — __current dependency__
- :medal_sports: [tslint-no-circular-imports](https://github.com/bcherny/tslint-no-circular-imports) — __current dependency__

🚀 See all rules in [tslint.json](./tslint.json) file and examples at [Printd](https://github.com/joseluisq/printd) or [Hyperapp Starter](https://github.com/joseluisq/hyperapp-starter) source code.

## Formatter

Many of the rules set include formatting feature built-in. This repository contains a [VS Code User Workspace](https://code.visualstudio.com/docs/getstarted/settings) pre-configured that you can use in order to gain all rule sets benefits just saving your files (`ctrl/cmd + S`).

For more details, take a look at [.vscode](./.vscode) directory.

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

Setup your `tslint.json` in your project as follow:

### Config Standard Plus (default)

```json
{
  "extends": "tslint-config-standard-plus"
}
```

### Config Standard Plus Legacy (optional)

```json
{
  "extends": "tslint-config-standard-plus/tslint.legacy"
}
```

### Overwrite rules

To overwrite some specific rules add `"rules"` section after `"extends"` in your `tslint.json` file.

```json
{
  "extends": "tslint-config-standard-plus",

  "rules": {
    "no-any": false
  }
}
```

### Recommendations

- Add `"strict": true` to your `tsconfig.json` to enables all [strict type checking options](https://www.typescriptlang.org/docs/handbook/compiler-options.html).
- Add `"noUnusedLocals": true` & `"noUnusedParameters": true` to your `tsconfig` - [tslint no-unused-variable rule doesn't report warnings any more?](https://github.com/Microsoft/vscode-tslint/blob/master/tslint/README.md#the-tslint-no-unused-variable-rule-doesnt-report-warnings-any-more)
- Read [Microsoft announce about deprecation of vscode-tslint](https://github.com/Microsoft/vscode-tslint/blob/master/tslint/README.md#faq)

## Contributions

Feel free to send some [Pull request](https://github.com/joseluisq/tslint-config-standard-plus/pulls) or [issue](https://github.com/joseluisq/tslint-config-standard-plus/issues).

## License

MIT license

© 2018-present [Jose Quintana](http://git.io/joseluisq)
