import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {COLOR_GREY, COLOR_BOTTOM_NAV, COLOR_SECONDARY} from '../common/colors';
import {ABOUT_APP, STOCK} from '../common/strings/strings';
import {ABOUT_APP_SCREEN} from '../features/aboutApp/types';
import AboutAppScreen from '../features/aboutApp/screens/about-app-screen';
import {TabParamList} from 'src/global';
import {STOCKS_SCREEN} from '@features/stocks/types';
import StocksScreen from '@features/stocks/screens/stocks-screen';

const Tabs = createBottomTabNavigator<TabParamList>();

const styles = StyleSheet.create({
  containerTab: {
    backgroundColor: COLOR_BOTTOM_NAV,
    borderTopWidth: 0,
  },
});

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{unmountOnBlur: true}}
      tabBarOptions={{
        style: styles.containerTab,
      }}>
      <Tabs.Screen
        name={ABOUT_APP_SCREEN}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? COLOR_SECONDARY : COLOR_GREY}}>
              {ABOUT_APP}
            </Text>
          ),
        }}
        component={AboutAppScreen}
      />
      <Tabs.Screen
        name={STOCKS_SCREEN}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? COLOR_SECONDARY : COLOR_GREY}}>
              {STOCK}
            </Text>
          ),
        }}
        component={StocksScreen}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
