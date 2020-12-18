import React, {FC} from 'react';
import {Provider} from 'mobx-react';
import {NavigationContainerRef} from '@react-navigation/native';

import {store} from './services/index';
import RootNavigator from './navigation/root-navigator';

const App: FC = () => {
  const navigator = React.useRef<NavigationContainerRef>(null);

  return (
    <Provider store={store}>
      <RootNavigator navigator={navigator} />
    </Provider>
  );
};

export default App;
