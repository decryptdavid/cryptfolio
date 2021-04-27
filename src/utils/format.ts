export function toCurrency(number: string, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(
    Number(number)
  );
}
