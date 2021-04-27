import Table from 'cli-table';
import { getPrices } from '../main';

export async function prices(coins: string[]): Promise<Table> {
  const table = new Table({
    head: ['Crypto', 'USD'],
    colWidths: [12, 21],
  });
  const cryptos = await getPrices(coins);
  cryptos.forEach(({ base, price }) => table.push([base, price]));

  return table;
}
