import {
  COLOR_BOTTOM_NAV,
  COLOR_CELL,
  COLOR_GREY,
  COLOR_SECONDARY,
  COLOR_WHITE,
} from '@common/colors';
import CellView from '@common/ui/cell-view';
import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

type IStockCellView = {
  title: string;
  last: string;
  highrestBig: string;
  percentChange: string;
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  textBig: {
    fontSize: 18,
    color: COLOR_WHITE,
  },
  textMedium: {
    fontSize: 12,
    color: COLOR_GREY,
  },
  containerText: {
    marginTop: 5,
  },
});
export const StockCellView: FC<IStockCellView> = ({
  title = '',
  last = '',
  highrestBig = '',
  percentChange = '',
}) => {
  return (
    <CellView>
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.textMedium}>{title}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.textBig}>{percentChange}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.textMedium}>{last}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.textMedium}>{highrestBig}</Text>
        </View>
      </View>
    </CellView>
  );
};

export default StockCellView;
