import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../constants/colors.constants';
import {useStocksHoldings} from '../../network/useStockHoldings';
import {StackParamList} from '../../utils/stackParamList.utils';
import {
  Footer,
  Header,
  StocksHoldingsList,
  StocksHoldingsWrapper,
} from './components/index.components';

type Props = NativeStackScreenProps<StackParamList, 'StocksHoldingsScreen'>;

export const StocksHoldingsScreen: FC<Props> = () => {
  const {data, loading, error, refetch} = useStocksHoldings();
  const {
    stocksData = [],
    todaysTotalPNL = '',
    totalCurrentVal = '',
    totalInvestmentVal = '',
    totalPNL = '',
  } = data || {};

  return (
    <View style={styles.container}>
      <Header />
      <StocksHoldingsWrapper isError={error?.length > 1} isLoading={loading}>
        <>
          <StocksHoldingsList stocksData={stocksData} refetch={refetch} />
          <Footer
            todaysTotalPNL={todaysTotalPNL}
            totalCurrentVal={totalCurrentVal}
            totalInvestmentVal={totalInvestmentVal}
            totalPNL={totalPNL}
          />
        </>
      </StocksHoldingsWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
});
