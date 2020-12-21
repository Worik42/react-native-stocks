import { createContext, useContext } from 'react';

import { StocksStore } from '@features/stocks/store';

/**
 * configure stores mobx
 */
const Context = createContext<StocksStore | null>(null);

export const StocksStoreProvider = Context.Provider;

export const useStocksStoreContext = () => {
  const store = useContext(Context);
  /**
   * Говорим ts, что стор будет всегда доступен.
   */
  return store ?? new StocksStore();
};
