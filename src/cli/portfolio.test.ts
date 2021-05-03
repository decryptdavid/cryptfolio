/* eslint-disable @typescript-eslint/ban-ts-comment */

import { portfolio } from './portfolio';
import { getPortfolio } from '../main';
jest.mock('../main', () => ({
  getPortfolio: jest.fn(() => [
    { base: 'BTC', values: [{ convert: 'USD', value: '56000.00' }] },
    { base: 'RUNE', values: [{ convert: 'USD', value: '15.00' }] },
  ]),
}));
test('created Table object', async () => {
  // expect.assertions(2);

  const bags = [
    { coin: 'BTC', value: '12' },
    { coin: 'RUNE', value: '1000' },
  ];

  expect(await portfolio(bags, ['USD'])).toMatchInlineSnapshot(`
    Table {
      "0": Array [
        "BTC",
        "56000.00",
      ],
      "1": Array [
        "RUNE",
        "15.00",
      ],
      "length": 2,
      "options": Object {
        "chars": Object {
          "bottom": "─",
          "bottom-left": "└",
          "bottom-mid": "┴",
          "bottom-right": "┘",
          "left": "│",
          "left-mid": "├",
          "mid": "─",
          "mid-mid": "┼",
          "middle": "│",
          "right": "│",
          "right-mid": "┤",
          "top": "─",
          "top-left": "┌",
          "top-mid": "┬",
          "top-right": "┐",
        },
        "colAligns": Array [],
        "colWidths": Array [
          12,
          21,
        ],
        "head": Array [
          "Crypto",
          "USD",
        ],
        "style": Object {
          "border": Array [
            "grey",
          ],
          "compact": false,
          "head": Array [
            "red",
          ],
          "padding-left": 1,
          "padding-right": 1,
        },
        "truncate": "…",
      },
    }
  `);
  expect(getPortfolio).toBeCalledTimes(1);
});
