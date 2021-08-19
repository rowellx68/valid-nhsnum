# valid-nhsnum

A zero dependency NHS Number validator and generator.

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

This method generates a single

```ts
import { generateOne } from 'valid-nhsnum';

// '082 379 5578'
generateOne(true);

// '0823795578'
generateOne();
```