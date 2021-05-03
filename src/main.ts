import fetch from 'node-fetch';
import { toCurrency } from './utils/format';
import { CryptonatorResponse, Currency, Price, Bag, Portfolio } from './types';

async function fetcher(currency: string, convert: string): Promise<Price> {
  if (currency === convert) {
    return {
      convert,
      value: '1',
      raw: '1',
    };
  }
  const response = await fetch(
    `https://api.cryptonator.com/api/ticker/${currency}-${convert}`
  );
  const data: CryptonatorResponse = await response.json();

  return {
    convert,
    value: toCurrency(data.ticker.price, convert),
    raw: data.ticker.price,
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
  const prices = currencies.map(currency =>
    getCurrencyConversion(currency, convert)
  );

  return await Promise.all(prices);
}

function getCoinValue(coin: string, bags: Bag[]): string | undefined {
  return bags.find(bag => bag.coin === coin)?.value;
}

export async function getPortfolio(
  bags: Bag[],
  convert: string[]
): Promise<Portfolio[]> {
  const portfolio = bags
    .map(bag => bag.coin)
    .map(currency => getCurrencyConversion(currency, convert))
    .map(async currency => {
      const curr = await currency;
      return {
        base: curr.base,
        values: curr.prices.map(price => ({
          convert: price.convert,
          value: toCurrency(
            Number(price.raw) * Number(getCoinValue(curr.base, bags)),
            price.convert
          ),
          raw: String(
            Number(price.raw) * Number(getCoinValue(curr.base, bags))
          ),
        })),
      };
    });

  return await Promise.all(portfolio);
}
