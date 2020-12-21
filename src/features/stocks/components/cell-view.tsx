import React, {FC, useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

import {COLOR_GREY, COLOR_WHITE} from '@common/colors';
import {default as BaseCell} from '@common/ui/cell-view';

type IStockCellView = {
  title: string;
  last: string;
  highrestBig: string;
  percentChange: string;
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
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
export const CellView: FC<IStockCellView> = ({
  title = '',
  last = '',
  highrestBig = '',
  percentChange = '',
}) => {
  const opacity = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.timing(opacity, {
      useNativeDriver: true,
      toValue: 1,
      duration: 500,
    }).start();
  };

  useEffect(() => {
    animate();
    return () => opacity.setValue(0);
  }, [title, percentChange, last, highrestBig]);

  return (
    <BaseCell>
      <View style={[styles.container]}>
        <View style={styles.containerText}>
          <Animated.Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles.textMedium, {opacity}]}>
            {title}
          </Animated.Text>
        </View>
        <View style={styles.containerText}>
          <Animated.Text numberOfLines={1} style={[styles.textBig, {opacity}]}>
            {percentChange}
          </Animated.Text>
        </View>
        <View style={styles.containerText}>
          <Animated.Text
            numberOfLines={1}
            style={[styles.textMedium, {opacity}]}>
            {last}
          </Animated.Text>
        </View>
        <View style={styles.containerText}>
          <Animated.Text
            numberOfLines={1}
            style={[styles.textMedium, {opacity}]}>
            {highrestBig}
          </Animated.Text>
        </View>
      </View>
    </BaseCell>
  );
};

export default CellView;
