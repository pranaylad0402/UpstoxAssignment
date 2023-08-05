import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CommonStyles} from '../../../utils/commonStyles.utils';
import {Typography} from '../../../constants/typography.constants';
import {Colors} from '../../../constants/colors.constants';
export const Footer: FC<{
  totalCurrentVal: string;
  totalInvestmentVal: string;
  todaysTotalPNL: string;
  totalPNL: string;
}> = ({
  totalCurrentVal = '',
  totalInvestmentVal = '',
  todaysTotalPNL = '',
  totalPNL = '',
}) => {
  const footerData = [
    {title: 'Current Value: ', value: totalCurrentVal},
    {title: 'Total Investment: ', value: totalInvestmentVal},
    {title: "Today's Profit and Loss:", value: todaysTotalPNL},
    {title: 'Profit and Loss: ', value: totalPNL},
  ];
  const footerDataLength = footerData.length;
  return (
    <View style={styles.footerContainer}>
      {footerData.map((item, index) => {
        return (
          <FooterItem
            item={item}
            key={index.toString()}
            footerDataLength={footerDataLength}
            index={index}
          />
        );
      })}
    </View>
  );
};

const FooterItem: FC<{
  item: {
    title: string;
    value: string;
  };
  footerDataLength: number;
  index: number;
}> = ({item, footerDataLength = 0, index = 0}) => {
  const {title = '', value = ''} = item || {};
  const marginTop = index === footerDataLength - 1 ? 20 : 8;
  return (
    <View
      style={[
        CommonStyles.flexRow,
        {
          marginTop,
        },
        CommonStyles.jcSb,
      ]}>
      <Text style={[Typography.sub1, CommonStyles.fwBold]}>{title}</Text>
      <Text style={Typography.sub1}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    padding: 16,
    backgroundColor: Colors.white,
    bottom: 0,
    width: '100%',
  },
});
