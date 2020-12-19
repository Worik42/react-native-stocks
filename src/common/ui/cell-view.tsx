import {COLOR_BOTTOM_NAV, COLOR_CELL, COLOR_SECONDARY} from '@common/colors';
import React, {FC, useState} from 'react';
import {
  View,
  TouchableOpacity,
  GestureResponderEvent,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import Animated from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: COLOR_CELL,
    elevation: 20,
  },
});
export const CellView: FC = ({children = <View />}) => {
  // const [show, setShow] = useState(new Animated.Value(0));
  // Animated.timing(show, {
  //   easing: () => {},
  //   toValue: 1,
  //   duration: 300,
  // }).start();

  return <View style={styles.container}>{children}</View>;
};

export default CellView;
