import {observable, action, computed} from 'mobx';
import {StockData} from 'src/global';

export interface IStocksStore {
  isError: boolean;
  data: StockData[];
}

export class StocksStore implements IStocksStore {
  data = [];
  isError = false;

  loadStocks() {}
}

export default new StocksStore();
