import { StockData } from "./store";

export type StocksRest = Record<string, Omit<StockData, 'name'>>;

export const stockRequest = async (): Promise<StocksRest> => {
  try {
    const response = await fetch(
      'https://poloniex.com/public?command=returnTicker',
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return error
  }
};


