# @blackblock/joli-string

The world fastest Javascript unique string generator.

![ Gzip Badge](https://img.badgesize.io/winston0410/blackblock-joli/master/src/index.js?compression=gzip&label=gzipped) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/ea592083b93a409f8c3df47966a9b167)](https://www.codacy.com/gh/winston0410/blackblock-joli/dashboard?utm_source=github.com&utm_medium=referral&utm_content=winston0410/blackblock-joli&utm_campaign=Badge_Grade) [![Maintainability](https://api.codeclimate.com/v1/badges/42e433c45488e9e9b818/maintainability)](https://codeclimate.com/github/winston0410/blackblock-joli/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/42e433c45488e9e9b818/test_coverage)](https://codeclimate.com/github/winston0410/blackblock-joli/test_coverage) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/blackblock-joli/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/blackblock-joli?targetFile=package.json)

## Benchmark

Folk and run the benchmark to compare this library with other identical libraries

### Version 1.1.0

While-loop;String;Memoized

**6,547,943 ops/sec ±1.61% (77 runs sampled)**

### Version 1.0.0

Recursion;String;Memoized

**3,894,252 ops/sec ±1.28% (78 runs sampled)**

### Version 0.1.0

Recursion;Array;No memoize

994,451 ops/sec ±2.39% (77 runs sampled)

### Other similar packages

#### [incstr](https://www.npmjs.com/package/incstr)

3,112,393 ops/sec ±2.90% (76 runs sampled)

## Features

- **Pure**

- Lightweight and performant

- Well-tested

- Infinite combinations of unique string

## Made in Hong Kong

This library is made by a Hong Konger.

## Installation

```
yarn add @blackblock/joli-string
```
