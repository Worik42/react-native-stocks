import React, {FC} from 'react';
import {View, StyleSheet, Text, GestureResponderEvent} from 'react-native';

import Button from './button';

type IButtonSubmit = {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const styles = StyleSheet.create({
  containerText: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
});

export const ButtonSubmit: FC<IButtonSubmit> = ({
  text = '',
  onPress = () => null,
}) => {
  return (
    <Button onPress={onPress}>
      <View style={styles.containerText}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Button>
  );
};

export default ButtonSubmit;
