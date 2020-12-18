import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {COLOR_ERROR, COLOR_GREY, COLOR_WHITE} from '@common/colors';
import CellView from '@common/ui/cell-view';

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  textBig: {
    fontSize: 18,
    color: COLOR_ERROR,
  },
});

const StockCellErrorView: FC = () => {
  return (
    <CellView>
      <View style={styles.container}>
        <Text style={styles.textBig}>ОШИБКА</Text>
      </View>
    </CellView>
  );
};

export default StockCellErrorView;
