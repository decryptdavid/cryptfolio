import { homedir } from 'os';
import { promises as fs } from 'fs';

const DOT_SETTINGS = `${homedir()}/.cryptfolio`;

type Settings = {
  coins: string;
  convert: string;
};

export async function loadSettings(): Promise<Settings> {
  const defaults = {
    coins: 'BTC,ETH',
    convert: 'USD',
  };

  try {
    // TODO: Parse settings for correct format / keys
    const settings = await fs.readFile(DOT_SETTINGS, 'utf8');

    return Object.assign({}, defaults, JSON.parse(settings)) as Settings;
  } catch (err) {
    console.log(`No settings found at ${DOT_SETTINGS}`);
    return defaults;
  }
}
