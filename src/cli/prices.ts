import Table from 'cli-table';
import { getPrices } from '../main';
import { toTableHeader } from '../utils/format';

const WIDTH = 21;

export async function prices(
  coins: string[],
  convert: string[]
): Promise<Table> {
  const cryptos = await getPrices(coins, convert);

  const header = toTableHeader(cryptos[0].prices);
  const widths = new Array(header.length).fill(WIDTH);

  const table = new Table({
    head: ['Crypto', ...header],
    colWidths: [12, ...widths],
  });

  cryptos.forEach(({ base, prices }) => {
    const t = prices.map(({ value }) => value);
    table.push([base, ...t]);
  });

  return table;
}
