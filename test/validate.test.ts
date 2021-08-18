import { validate, generateOne, generate } from '../src';

describe('validate', () => {
  it.each(['369 955 5801', '3699555801', '369 955 5801   ', '5144270476'])(
    'returns true for valid NHS number -> %s',
    value => {
      expect(validate(value)).toBe(true);
    }
  );

  it.each([
    '369a955 5801',
    '',
    'AAAAAAAAAA',
    '369555801',
    '51442704765144270476',
  ])('returns false for invalid NHS number -> %s', value => {
    expect(validate(value)).toBe(false);
  });
});

describe('generateOne', () => {
  it('generates valid values', () => {
    const values = generateOne(false);

    expect(validate(values)).toBe(true);
  });

  it('generates valid formatted values', () => {
    const values = generateOne(true);

    expect(validate(values)).toBe(true);
    expect(values[3]).toBe(' ');
    expect(values[7]).toBe(' ');
  });
});

describe('generate', () => {
  it.each([1, 2, 5, 20])(
    'generates correct number of NHS numbers -> %s',
    count => {
      const values = generate(count);

      expect(values).toHaveLength(count);
    }
  );
});
