import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs/lib/typescript/src/types';

import {STOCKS_SCREEN} from '@features/stock/types';
import {TabParamList} from 'src/global';
import {ABOUT_APP_SCREEN} from '../types';

type AboutAppScreenNavigationProp = BottomTabNavigationProp<
  TabParamList,
  typeof ABOUT_APP_SCREEN
>;

export type IAboutScreenProps = {
  navigation: AboutAppScreenNavigationProp;
};

const styles = StyleSheet.create({
  textTitleContainer: {
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigateBtnContainer: {
    padding: 40,
  },
});

const AboutAppScreen: FC<IAboutScreenProps> = ({navigation}): JSX.Element => {
  const navigateStocks = () => {
    navigation.navigate(STOCKS_SCREEN);
  };
  return (
    <View>
      <View style={styles.textTitleContainer}>
        <Text>О приложении</Text>
      </View>
      <View style={styles.navigateBtnContainer}>
        <Button title="Перейти к котировкам" onPress={navigateStocks} />
      </View>
    </View>
  );
};

export default AboutAppScreen;
