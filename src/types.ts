export type Bag = {
  coin: string;
  value: string;
};

export type Price = {
  convert: string;
  value: string;
  raw: string;
};

export type Portfolio = {
  base: string;
  values: Price[];
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
