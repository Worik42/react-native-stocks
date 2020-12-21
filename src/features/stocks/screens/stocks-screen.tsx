import React, {FC, useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {observer} from 'mobx-react-lite';

import {COLOR_PRIMARY, COLOR_SECONDARY} from '@common/colors';
import { useStocksStoreContext } from '@services';
import StocksTableView from '../components/table-view';

type IStocksScreen = {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_PRIMARY,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
});

const INTERVAL: number = 5000;

const StocksScreen: FC<IStocksScreen> = observer(() => {
  const [isLoading, setLoading] = useState(false);

  const stocks = useStocksStoreContext();

  useEffect(() => {
    setLoading(true);
    stocks.loadStocks();

    const id = setInterval(() => {
      stocks.loadStocks();
    }, INTERVAL);
    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (stocks.data.length !== 0) {
      setLoading(false);
    }
  }, [stocks.data]);

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator
          size="large"
          animating={true}
          color={COLOR_SECONDARY}
        />
      )}
      <StocksTableView isError={stocks.isError} data={stocks.data} />
    </View>
  );
});
export default StocksScreen;
