import Table from 'cli-table';
import { getPortfolio } from '../main';
import { toTableHeader } from '../utils/format';
import { Bag } from '../types';

const WIDTH = 21;

export async function portfolio(
  folio: Bag[],
  convert: string[]
): Promise<Table> {
  const cryptos = await getPortfolio(folio, convert);

  const header = toTableHeader(cryptos[0].values);
  const widths = new Array(header.length).fill(WIDTH);

  const table = new Table({
    head: ['Crypto', ...header],
    colWidths: [12, ...widths],
  });

  cryptos.forEach(({ base, values }) => {
    const t = values.map(({ value }) => value);
    table.push([base, ...t]);
  });

  return table;
}
