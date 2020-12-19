import React, {createContext, FC, useContext} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

import {store} from './services/index';
import RootNavigator from './navigation/root-navigator';
import StocksStore from '@features/stocks/store';

const Context = createContext<StocksStore>(new StocksStore());

export const StocksStoreProvider = Context.Provider;
export const useStocksStoreContext = () => useContext(Context);

const App: FC = () => {
  const navigator = React.useRef<NavigationContainerRef>(null);

  return (
    <StocksStoreProvider value={new StocksStore()}>
      <RootNavigator navigator={navigator} />
    </StocksStoreProvider>
  );
};

export default App;
