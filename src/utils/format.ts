import { Price } from '../types';

export function toCurrency(number: string, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(
    Number(number)
  );
}

export function argumentsToArray(string: string): string[] {
  return string.split(',').map(item => item.trim());
}

export function toTableHeader(prices: Price[]): string[] {
  return prices.map(price => price.convert);
}
