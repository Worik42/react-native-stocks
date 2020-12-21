import React, {FC} from 'react';
import {
  View,
  TouchableOpacity,
  GestureResponderEvent,
  ViewStyle,
  StyleSheet,
} from 'react-native';

import {COLOR_SECONDARY} from '@common/colors';

type IButton = {
  style?: ViewStyle;
  onPress?: (event: GestureResponderEvent) => void;
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 5,
    backgroundColor: COLOR_SECONDARY,
  },
});

export const Button: FC<IButton> = ({
  children = <View />,
  onPress = () => null,
  style = styles.container,
}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
