#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { prices } from './cli/prices';

yargs(hideBin(process.argv))
  .command(
    'prices [coins]',
    'get a list of currency prices against the US dollar',
    yargs => {
      return yargs.positional('coins', {
        describe: 'comma separated list of tickers',
        default: 'BTC,ETH',
      });
    },
    async argv => {
      const coins = argv.coins.split(',').map(coin => coin.trim());
      const table = await prices(coins);
      console.log(table.toString());
    }
  )
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging',
  }).argv;
