import React, {FC} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

import RootNavigator from '@navigation/root-navigator';
import { StocksStoreProvider } from '@services';
import StocksStore from '@features/stocks/store';

const App: FC = () => {
  const navigator = React.useRef<NavigationContainerRef>(null);

  return (
    <StocksStoreProvider value={new StocksStore()}>
      <RootNavigator navigator={navigator} />
    </StocksStoreProvider>
  );
};

export default App;
