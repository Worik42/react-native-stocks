import {
  COLOR_BOTTOM_NAV,
  COLOR_CELL,
  COLOR_GREY,
  COLOR_SECONDARY,
  COLOR_WHITE,
} from '@common/colors';
import CellView from '@common/ui/cell-view';
import React, {FC, useEffect, useRef} from 'react';
import {View, StyleSheet, Text, Animated} from 'react-native';

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
  const animated = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animated, {
      useNativeDriver: true,
      toValue: 1,
      duration: 500,
    }).start();
  }, [title, percentChange, last, highrestBig]);

  const opacity = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <CellView>
      <View style={[styles.container]}>
        <View style={styles.containerText}>
          <Animated.Text style={[styles.textMedium, {opacity}]}>
            {title}
          </Animated.Text>
        </View>
        <View style={styles.containerText}>
          <Animated.Text style={[styles.textBig, {opacity}]}>
            {percentChange}
          </Animated.Text>
        </View>
        <View style={styles.containerText}>
          <Animated.Text style={[styles.textMedium, {opacity}]}>
            {last}
          </Animated.Text>
        </View>
        <View style={styles.containerText}>
          <Animated.Text style={[styles.textMedium, {opacity}]}>
            {highrestBig}
          </Animated.Text>
        </View>
      </View>
    </CellView>
  );
};

export default StockCellView;
