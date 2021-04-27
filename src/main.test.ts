/* eslint-disable @typescript-eslint/ban-ts-comment */

import { getPrices } from './main';
import fetch from 'node-fetch';
jest.mock('node-fetch', () => jest.fn());

test('returns a single currency', async () => {
  expect.assertions(1);
  const body = {
    ticker: {
      base: 'base',
      target: 'target',
      price: '1234.56',
    },
    timestamp: 123456789,
    success: true,
    error: '',
  };

  const response = Promise.resolve({
    ok: true,
    status: '200',
    json: () => body,
  });
  // @ts-ignore
  fetch.mockImplementation(() => response);

  expect(await getPrices(['BTC'])).toStrictEqual([
    { base: 'base', price: '$1,234.56' },
  ]);
});

test('returns a multiple currencies', async () => {
  expect.assertions(1);
  const body = {
    ticker: {
      base: 'base',
      target: 'target',
      price: '1234.56',
    },
    timestamp: 123456789,
    success: true,
    error: '',
  };

  const response = Promise.resolve({
    ok: true,
    status: '200',
    json: () => body,
  });
  // @ts-ignore
  fetch.mockImplementation(() => response);

  expect(await getPrices(['BTC', 'RUNE'])).toStrictEqual([
    { base: 'base', price: '$1,234.56' },
    { base: 'base', price: '$1,234.56' },
  ]);
});
