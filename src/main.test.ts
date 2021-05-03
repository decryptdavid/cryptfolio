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

  expect(await getPrices(['BTC'], ['USD'])).toStrictEqual([
    {
      base: 'BTC',
      prices: [{ convert: 'USD', value: '$1,234.56', raw: '1234.56' }],
    },
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

  expect(await getPrices(['BTC', 'RUNE'], ['USD'])).toStrictEqual([
    {
      base: 'BTC',
      prices: [{ convert: 'USD', value: '$1,234.56', raw: '1234.56' }],
    },
    {
      base: 'RUNE',
      prices: [{ convert: 'USD', value: '$1,234.56', raw: '1234.56' }],
    },
  ]);
});

test('returns a multiple currencies against multiple converts', async () => {
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

  expect(await getPrices(['BTC', 'RUNE'], ['USD', 'GBP'])).toStrictEqual([
    {
      base: 'BTC',
      prices: [
        { convert: 'USD', value: '$1,234.56', raw: '1234.56' },
        { convert: 'GBP', value: '£1,234.56', raw: '1234.56' },
      ],
    },
    {
      base: 'RUNE',
      prices: [
        { convert: 'USD', value: '$1,234.56', raw: '1234.56' },
        { convert: 'GBP', value: '£1,234.56', raw: '1234.56' },
      ],
    },
  ]);
});
