import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  BottomTabBarOptions,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {COLOR_GREY, COLOR_BOTTOM_NAV, COLOR_SECONDARY} from '@common/colors';
import {ABOUT_APP_SCREEN} from '@features/aboutApp/types';
import AboutAppScreen from '@features/aboutApp/screens/about-app-screen';
import {STOCKS_SCREEN} from '@features/stocks/types';
import StocksScreen from '@features/stocks/screens/stocks-screen';

export type TabParamList = {
  AboutAppScreen: undefined;
  StocksScreen: undefined;
};

const Tabs = createBottomTabNavigator<TabParamList>();

const TabNavigatorScreenOptions: BottomTabNavigationOptions = {
  unmountOnBlur: true,
};

const styles = StyleSheet.create({
  containerTab: {
    backgroundColor: COLOR_BOTTOM_NAV,
    borderTopWidth: 0,
  },
});

const BottomTabOptions: BottomTabBarOptions = {
  style: styles.containerTab,
};

const renderTextNameTab = (text: string) => ({focused}: {focused: boolean}) => (
  <Text style={{color: focused ? COLOR_SECONDARY : COLOR_GREY}}>{text}</Text>
);

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={TabNavigatorScreenOptions}
      tabBarOptions={BottomTabOptions}>
      <Tabs.Screen
        name={ABOUT_APP_SCREEN}
        options={{
          tabBarLabel: renderTextNameTab("О приложении"),
        }}
        component={AboutAppScreen}
      />
      <Tabs.Screen
        name={STOCKS_SCREEN}
        options={{
          tabBarLabel: renderTextNameTab("Котировки"),
        }}
        component={StocksScreen}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
