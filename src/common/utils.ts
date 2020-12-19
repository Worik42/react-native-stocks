import {StockData} from 'src/global';

export default class Utils {
  static parseDataStock = (data: unknown): StockData[] => {
    return Object.keys(data).map((item) => {
      return {
        name: item,
        ...data[item],
      } as StockData;
    }) as StockData[];
  };
}
