import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from '../global';
import TabNavigator from './tab-navigator';
import {TAB_ROUTE} from './types';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={TAB_ROUTE} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
