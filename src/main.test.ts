/* eslint-disable @typescript-eslint/ban-ts-comment */

import { getPrices, getPortfolio } from './main';
import fetch from 'node-fetch';
jest.mock('node-fetch', () => jest.fn());

describe('#getPrices', () => {
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
});

describe('#getPortfolio', () => {
  test('returns ', async () => {
    expect.assertions(1);
    const body = {
      ticker: {
        base: 'base',
        target: 'target',
        price: '10',
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

    expect(
      await getPortfolio(
        [
          { coin: 'BTC', value: '1' },
          { coin: 'RUNE', value: '100' },
        ],
        ['USD', 'EUR']
      )
    ).toStrictEqual([
      {
        base: 'BTC',
        values: [
          { convert: 'USD', value: '$10.00', raw: '10' },
          { convert: 'EUR', value: '€10.00', raw: '10' },
        ],
      },
      {
        base: 'RUNE',
        values: [
          { convert: 'USD', value: '$1,000.00', raw: '1000' },
          { convert: 'EUR', value: '€1,000.00', raw: '1000' },
        ],
      },
    ]);
  });
});
