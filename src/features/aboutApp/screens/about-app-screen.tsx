import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs/lib/typescript/src/types';

import {STOCKS_SCREEN} from '@features/stocks/types';
import {ABOUT_APP_SCREEN} from '../types';
import {COLOR_PRIMARY, COLOR_WHITE} from '@common/colors';
import {TabParamList} from 'src/global';
import Button from '@common/ui/button';
import ButtonSubmit from '@common/ui/button-submit';

type AboutAppScreenNavigationProp = BottomTabNavigationProp<
  TabParamList,
  typeof ABOUT_APP_SCREEN
>;

export type IAboutScreenProps = {
  navigation: AboutAppScreenNavigationProp;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_PRIMARY,
    flex: 1,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
  },
  textTitleContainer: {
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigateBtnContainer: {
    padding: 40,
  },
  textAbout: {
    textAlign: 'center',
    color: COLOR_WHITE,
  },
});

const AboutAppScreen: FC<IAboutScreenProps> = ({navigation}): JSX.Element => {
  const navigateStocks = () => {
    navigation.navigate(STOCKS_SCREEN);
  };
  return (
    <View style={styles.container}>
      <View style={styles.textTitleContainer}>
        <Text style={styles.textAbout}>О приложении</Text>
        <Text style={styles.textAbout}>Экран “О приложении”</Text>
        <Text style={styles.textAbout}>Экран “Котировки” </Text>
        <Text style={styles.textAbout}>
          Для навигации используется react-navigation
        </Text>
        <Text style={styles.textAbout}>
          Сборка, запуск и отладка: приложение является натив-компилируемым
        </Text>
        <Text style={styles.textAbout}>
          Под таблицей подразумевается использование не готовых компонент
          табличного вида, а мини-реализация своего под конкретные нужды
        </Text>
      </View>
      <View style={styles.navigateBtnContainer}>
        <ButtonSubmit text="Перейти к котировкам" onPress={navigateStocks} />
      </View>
    </View>
  );
};

export default AboutAppScreen;
