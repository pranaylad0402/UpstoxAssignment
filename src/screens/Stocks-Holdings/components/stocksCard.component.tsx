import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Typography} from '../../../constants/typography.constants';
import {INRFormatter} from '../../../utils/math.utils';
import {CommonStyles} from '../../../utils/commonStyles.utils';
import {Colors} from '../../../constants/colors.constants';
import {StocksDataProps} from '../../../network/useStockHoldings';

export const StocksCard: FC<{
  item: StocksDataProps;
}> = ({item}) => {
  const {symbol = '', quantity = 0, ltp = 0, pnl = ''} = item || {};
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={[Typography.sub1, CommonStyles.fwBold]}>{symbol}</Text>
        <Text style={[Typography.sub1]}>{quantity}</Text>
      </View>
      <View style={CommonStyles.aIfe}>
        <View style={CommonStyles.flexRow}>
          <Text style={[Typography.sub1]}>{'LTP:'}</Text>
          <Text
            style={[Typography.sub1, CommonStyles.ml_2, CommonStyles.fwBold]}>
            {INRFormatter(ltp)}
          </Text>
        </View>
        <View style={CommonStyles.flexRow}>
          <Text style={[Typography.sub1]}>{'P/L:'}</Text>
          <Text
            style={[Typography.sub1, CommonStyles.ml_2, CommonStyles.fwBold]}>
            {pnl}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    marginBottom: 4,
  },
});
