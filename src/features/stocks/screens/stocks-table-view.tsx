import React, {FC} from 'react';

import {View, StyleSheet} from 'react-native';
import {StockData} from 'src/global';
import StockCellView from './stock-cell-view';
import StockCellErrorView from './stock-cell-error-view';
import {ScrollView} from 'react-native-gesture-handler';

type IStockTableView = {
  data: StockData[];
  isError?: boolean;
};

const styles = StyleSheet.create({
  containerCell: {
    margin: 5,
  },
  columnStyle: {flexWrap: 'wrap', flex: 1},
  containerTable: {flexWrap: 'wrap', flex: 1, flexDirection: 'row'},
});
export const StocksTableView: FC<IStockTableView> = ({
  data = [],
  isError = false,
}) => {
  const renderItem = (item: StockData) => (
    <View style={styles.containerCell} key={item.id}>
      <StockCellView
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
            <StockCellErrorView />
          </View>
        )}
        {data.map((item) => renderItem(item))}
      </View>
    </ScrollView>
  );
};

export default StocksTableView;
