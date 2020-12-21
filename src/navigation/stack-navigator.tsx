import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from './tab-navigator';
import {TAB_ROUTE} from './types';

type RootStackParamList = {
  Tabs: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={TAB_ROUTE} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
