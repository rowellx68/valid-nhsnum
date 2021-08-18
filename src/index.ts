export const validate = (nhsNumber: string): boolean => {
  const nospace = `${nhsNumber}`.replace(/\W/g, '');

  if (nospace.length !== 10) {
    return false;
  }

  if ((nospace.match(/\d{10}/) ?? []).length !== 1) {
    return false;
  }

  const split = nospace.split('').map(d => parseInt(d, 10));

  const value = split.reduce((total, current, i) => {
    if (i > 8) {
      return total;
    }

    return current * (10 - i) + total;
  }, 0);

  const remainder = value % 11;
  const check = 11 - remainder;

  return check === split[9];
};

export const generate = (
  count: number,
  formatted: boolean = false
): string[] => {
  if (count <= 0) {
    return [];
  }

  const values = [];

  for (let i = 0; i < count; i++) {
    values.push(generateOne(formatted));
  }

  return values;
};

export const generateOne = (formatted: boolean): string => {
  const start = [0, 3, 4, 6][Math.floor(Math.random() * 3)];
  const digits = [];

  digits.push(start);

  for (let i = 0; i < 8; i++) {
    digits.push(Math.floor(Math.random() * 10));
  }

  const value = digits.reduce(
    (total, current, i) => current * (10 - i) + total,
    0
  );

  const remainder = value % 11;
  const check = 11 - remainder;

  if (check >= 10) {
    return generateOne(formatted);
  }

  digits.push(check);

  if (formatted) {
    return [
      ...digits.slice(0, 3),
      ' ',
      ...digits.slice(3, 6),
      ' ',
      ...digits.slice(6),
    ].join('');
  }

  return digits.join('');
};
