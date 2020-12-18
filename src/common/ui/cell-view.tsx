import {COLOR_BOTTOM_NAV, COLOR_CELL, COLOR_SECONDARY} from '@common/colors';
import React, {FC} from 'react';
import {
  View,
  TouchableOpacity,
  GestureResponderEvent,
  ViewStyle,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: COLOR_CELL,
    elevation: 20,
  },
});
export const CellView: FC = ({children = <View />}) => {
  return <View style={styles.container}>{children}</View>;
};

export default CellView;
