# valid-nhsnum

A zero dependency NHS Number validator and generator.

## Example Usage

```ts
import { validate } from 'valid-nhsnum';

// true
validate('098 357 6548');

// false
validate('098357');
```

```ts
import { generate } from 'valid-nhsnum';

// ['035 469 6505', '082 379 5578']
generate(2, true);

// ['0354696505', '0823795578']
generate(2);
```

```ts
import { generateOne } from 'valid-nhsnum';

// '082 379 5578'
generateOne(true);

// '0823795578'
generateOne(false);
```