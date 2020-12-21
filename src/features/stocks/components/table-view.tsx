import React, {FC} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import CellView from './cell-view';
import CellErrorView from './cell-error-view';
import {StockData} from '../store';

type IStockTableView = {
  data: StockData[];
  isError?: boolean;
};

const styles = StyleSheet.create({
  containerCell: {
    padding: 5,
    flexShrink: 0,
    flexBasis: '33.33%',
  },
  containerTable: {
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
  },
});

export const StocksTableView: FC<IStockTableView> = ({
  data = [],
  isError = false,
}) => {
  const renderItem = (item: StockData) => (
    <View style={styles.containerCell} key={item.id}>
      <CellView
        highrestBig={item.highestBid}
        title={item.name}
        percentChange={item.percentChange}
        last={item.last}
      />
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.containerTable}>
        {isError && (
          <View style={styles.containerCell}>
            <CellErrorView />
          </View>
        )}
        {data.map((item) => renderItem(item))}
      </View>
    </ScrollView>
  );
};

export default StocksTableView;
