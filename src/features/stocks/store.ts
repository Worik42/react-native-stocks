import {makeAutoObservable, runInAction} from 'mobx';

import Utils from '@common/utils';
import {stockRequest} from './api';


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


export class StocksStore {
  data: StockData[] = [];
  isError = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadStocks() {
    stockRequest()
      .then((data) => {
        runInAction(() => {
          this.isError = false;
          this.data = Utils.parseDataStock(data);
        });
      })
      .catch((error) => {
        runInAction(() => {
          this.isError = true;
        });
      });
  }
}

export default StocksStore;
