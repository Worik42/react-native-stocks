import React, {FC} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import StackNavigator from './stack-navigator';

type IRootNavigator = {
  navigator: React.RefObject<NavigationContainerRef>;
}

const RootNavigator: FC<IRootNavigator> = ({navigator}) => {
  return (
    <NavigationContainer ref={navigator}>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default RootNavigator;
