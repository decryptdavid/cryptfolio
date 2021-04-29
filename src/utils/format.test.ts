/* eslint-disable @typescript-eslint/ban-ts-comment */

import { toCurrency, argumentsToArray, toTableHeader } from './format';

describe('#toCurrency', () => {
  test('converts a number to formatted currency, defaulting to USD', () => {
    const number = '1234.56';
    expect(toCurrency(number)).toBe('$1,234.56');
  });

  test('converts a number to formatted currency, GBP', () => {
    const number = '1234.56';
    expect(toCurrency(number, 'GBP')).toBe('£1,234.56');
  });

  test('converts a number to formatted currency, EUR', () => {
    const number = '1234.56';
    expect(toCurrency(number, 'EUR')).toBe('€1,234.56');
  });
});

describe('#argumentsToArray', () => {
  test('converts a comma separated string to an array of strings', () => {
    const args = 'BTC,ETH,RUNE';
    expect(argumentsToArray(args)).toStrictEqual(['BTC', 'ETH', 'RUNE']);
  });
});

describe('#toTableHeader', () => {
  test('converts a list of currency prices to an array of the convert', () => {
    const prices = [
      { convert: 'USD', value: '1' },
      { convert: 'GBP', value: '1' },
      { convert: 'EUR', value: '1' },
    ];
    expect(toTableHeader(prices)).toStrictEqual(['USD', 'GBP', 'EUR']);
  });
});
