import Utils from '@common/utils';
import {makeAutoObservable} from 'mobx';
import {StockData} from 'src/global';
import {stockRequest} from './api';

export interface IStocksStore {
  isError: boolean;
  data: StockData[];
}

export class StocksStore implements IStocksStore {
  data: StockData[] = [];
  isError = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadStocks() {
    stockRequest()
      .then((data) => {
        this.isError = false;
        this.data = Utils.parseDataStock(data);
      })
      .catch((error) => (this.isError = true));
  }
}

export default StocksStore;
