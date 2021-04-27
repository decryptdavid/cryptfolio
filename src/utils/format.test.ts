/* eslint-disable @typescript-eslint/ban-ts-comment */

import { toCurrency } from './format';

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
