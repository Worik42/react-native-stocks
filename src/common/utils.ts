import {StocksRest} from '@features/stocks/api';
import {StockData} from '@features/stocks/store';

export default class Utils {
  static parseDataStock = (data: StocksRest): StockData[] => {
    return Object.keys(data).map((item) => {
      return {
        name: item,
        ...data[item],
      };
    });
  };
}
