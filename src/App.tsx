import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'mobx-react';

import RootNavigator from './navigation/root-navigator';
import {NavigationContainerRef} from '@react-navigation/native';

const styles = StyleSheet.create({});

const App: FC = () => {
  const navigator = React.useRef<NavigationContainerRef>(null);

  return (
    <Provider>
      <RootNavigator navigator={navigator} />
    </Provider>
  );
};

export default App;
