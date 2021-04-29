export type Price = {
  convert: string;
  value: string;
};

export type Currency = {
  base: string;
  prices: Price[];
};

export type CryptonatorResponse = {
  ticker: {
    base: string;
    target: string;
    price: string;
  };
  timestamp: number;
  success: boolean;
  error: string;
};
