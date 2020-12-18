import {COLOR_PRIMARY} from '@common/colors';
import CellView from '@common/ui/cell-view';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import StockCellView from './stock-cell-view';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_PRIMARY,
    flex: 1,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    padding: 40,
  },
});

const StocksScreen: FC = () => (
  <View style={styles.container}>
    <StockCellView
      title="BTC_BTS"
      highrestBig="0.00000105"
      last="0.00000105"
      percentChange="-0.06250000"
    />
  </View>
);

export default StocksScreen;
