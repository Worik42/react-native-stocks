export type RootStackParamList = {
  Tabs: undefined;
};

export type TabParamList = {
  AboutAppScreen: undefined;
  StocksScreen: undefined;
};

export type StockData = {
  id: number;
  name: string;
  last: string;
  lowestAsk?: string;
  highestBid: string;
  percentChange: string;
  baseVolume?: string;
  quoteVolume?: string;
  isFrozen?: string;
  high24hr?: string;
  low24hr?: string;
};
