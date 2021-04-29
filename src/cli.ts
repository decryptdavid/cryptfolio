#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { prices } from './cli/prices';
import { argumentsToArray } from './utils/format';
import { loadSettings } from './utils/settings';

(async function main() {
  const settings = await loadSettings();

  return yargs(hideBin(process.argv))
    .command(
      'prices [coins]',
      'get a list of currency prices against other currencies',
      yargs => {
        return yargs
          .positional('coins', {
            describe: 'comma separated list of tickers',
            default: settings.coins,
          })
          .option('convert', {
            alias: 'c',
            type: 'string',
            description:
              'Comma separated list of currencies to convert against',
            default: settings.convert,
          });
      },
      async argv => {
        const coins = argumentsToArray(argv.coins);
        const convert = argumentsToArray(argv.convert);

        const table = await prices(coins, convert);
        console.log(table.toString());
      }
    )
    .option('verbose', {
      alias: 'v',
      type: 'boolean',
      description: 'Run with verbose logging',
    }).argv;
})();
