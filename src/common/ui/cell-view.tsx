import React, {FC} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import {COLOR_CELL} from '@common/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: COLOR_CELL,
    elevation: 20,
  },
});

const CellView: FC = ({children = <View />}) => {
  return <View style={styles.container}>{children}</View>;
};

export default CellView;
