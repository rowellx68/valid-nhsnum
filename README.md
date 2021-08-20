# valid-nhsnum

[![npm version](https://badge.fury.io/js/valid-nhsnum.svg)](https://badge.fury.io/js/valid-nhsnum)
![Action Status](https://github.com/rowellx68/valid-nhsnum/actions/workflows/main.yml/badge.svg)

A zero dependency NHS Number validator and generator.

## Demo

Try the demo [here](https://rowellx68.github.io/valid-nhsnum/).

## Installation

You can install `valid-nhsnum` using either `yarn` or `npm`.

```bash
yarn add valid-nhsnum

npm i valid-nhsnum
```

## API

#### `validate(value: string): boolean`

This method accepts a string and returns a boolean signifying the value's validity.

```ts
import { validate } from 'valid-nhsnum';

// true
validate('098 357 6548');
```


#### `generate(count: number, formatted?: boolean): string[]`

This method is useful for generating a list of NHS numbers that can be used for testing.

It has an optional boolean parameter that pre-formats the NHS numbers if `true` is passed in.

```ts
import { generate } from 'valid-nhsnum';

// ['035 469 6505', '082 379 5578']
generate(2, true);

// ['0354696505', '0823795578']
generate(2);
```


#### `generateOne(formatted?: boolean): string`

This method generates a single NHS number with an optional boolean parameter that if set to `true` would format the string.

```ts
import { generateOne } from 'valid-nhsnum';

// '082 379 5578'
generateOne(true);

// '0823795578'
generateOne();
```

## Links

- [NHS number format](https://en.wikipedia.org/wiki/NHS_number#Format)
- [What is an NHS number?](https://www.nhs.uk/using-the-nhs/about-the-nhs/what-is-an-nhs-number/)
