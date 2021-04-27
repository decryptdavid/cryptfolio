import fetch from 'node-fetch';
import { toCurrency } from './utils/format';

enum Conversion {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
}

type Currency = {
  base: string;
  price: string;
};

type CryptonatorResponse = {
  ticker: {
    base: string;
    target: string;
    price: string;
  };
  timestamp: number;
  success: boolean;
  error: string;
};

async function getCurrencyConversion(currency: string): Promise<Currency> {
  const response = await fetch(
    `https://api.cryptonator.com/api/ticker/${currency}-${Conversion.USD}`
  );
  const data: CryptonatorResponse = await response.json();

  return {
    base: data.ticker.base,
    price: toCurrency(data.ticker.price),
  };
}

export async function getPrices(currencies: string[]): Promise<Currency[]> {
  const arr = currencies.map(getCurrencyConversion);

  return await Promise.all(arr);
}
