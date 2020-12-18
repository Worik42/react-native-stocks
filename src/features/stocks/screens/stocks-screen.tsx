import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {inject, observer} from 'mobx-react';

import {StockData} from 'src/global';
import StocksTableView from './stocks-table-view';
import {COLOR_PRIMARY} from '@common/colors';
import {StocksStore} from '../store';

type IStocksScreen = {
  stocks: StocksStore;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_PRIMARY,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 5,
  },
});

const mockData: StockData[] = [
  {
    id: 0,
    name: 'BTC_BTS',
    highestBid: '0.00000105',
    percentChange: '-0.06250000',
    last: '0.00000105',
  },
  {
    id: 1,
    name: 'BTC_BTS',
    highestBid: '0.00000105',
    percentChange: '-0.06250000',
    last: '0.00000105',
  },
  {
    id: 2,
    name: 'BTC_BTS',
    highestBid: '0.00000105',
    percentChange: '-0.06250000',
    last: '0.00000105',
  },
  {
    id: 3,
    name: 'BTC_BTS',
    highestBid: '0.00000105',
    percentChange: '-0.06250000',
    last: '0.00000105',
  },
];

const StocksScreen: FC<IStocksScreen> = observer(({stocks}) => {
  console.log(stocks);
  
  return (
    <View style={styles.container}>
      <StocksTableView data={mockData} />
    </View>
  );
});
export default StocksScreen;
