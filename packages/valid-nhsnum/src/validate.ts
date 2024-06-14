export const validate = (nhsNumber: string): boolean => {
  const nospace = `${nhsNumber}`.replace(/\W/g, '');

  if (nospace.length !== 10) {
    return false;
  }

  if ((nospace.match(/\d{10}/) ?? []).length !== 1) {
    return false;
  }

  const split = nospace.split('').map((d) => parseInt(d, 10));

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
