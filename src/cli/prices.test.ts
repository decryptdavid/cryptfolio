/* eslint-disable @typescript-eslint/ban-ts-comment */

import { prices } from './prices';
import { getPrices } from '../main';
jest.mock('../main', () => ({
  getPrices: jest.fn(() => [
    { base: 'BTC', price: '56000.00' },
    { base: 'RUNE', price: '15.00' },
  ]),
}));
test('returns a multiple currencies', async () => {
  expect.assertions(2);

  expect(await prices(['BTC', 'RUNE'])).toMatchInlineSnapshot(`
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
  expect(getPrices).toBeCalledTimes(1);
});
