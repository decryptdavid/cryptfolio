import fetch from 'node-fetch';
import { toCurrency } from './utils/format';
import { CryptonatorResponse, Currency, Price } from './types';

async function fetcher(currency: string, convert: string): Promise<Price> {
  if (currency === convert) {
    return {
      convert,
      value: '1',
    };
  }
  const response = await fetch(
    `https://api.cryptonator.com/api/ticker/${currency}-${convert}`
  );
  const data: CryptonatorResponse = await response.json();

  return {
    convert,
    value: toCurrency(data.ticker.price, convert),
  };
}

async function getCurrencyConversion(
  currency: string,
  convert: string[]
): Promise<Currency> {
  const prices = await Promise.all(
    convert.map(async conversion => await fetcher(currency, conversion))
  );

  return {
    base: currency,
    prices,
  };
}

export async function getPrices(
  currencies: string[],
  convert: string[]
): Promise<Currency[]> {
  const arr = currencies.map(currency =>
    getCurrencyConversion(currency, convert)
  );

  return await Promise.all(arr);
}
