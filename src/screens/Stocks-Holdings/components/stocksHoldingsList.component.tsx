import React, {FC} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {StocksCard} from './stocksCard.component';
import {StocksDataProps} from '../../../network/useStockHoldings';

export const StocksHoldingsList: FC<{
  stocksData: StocksDataProps[];
  refetch: () => void;
}> = ({stocksData = [], refetch = () => {}}) => {
  const renderItem = ({item}: {item: StocksDataProps}) => {
    return <StocksCard item={item} />;
  };
  const keyExtractor = (item: StocksDataProps) => {
    return item.symbol;
  };
  return (
    <FlatList
      data={stocksData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      refreshControl={<RefreshControl refreshing={false} onRefresh={refetch} />}
    />
  );
};
