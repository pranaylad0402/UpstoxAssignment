import React from 'react';
import {CommonStyles} from '../../../utils/commonStyles.utils';
import {Colors} from '../../../constants/colors.constants';
import {Typography} from '../../../constants/typography.constants';
import {StyleSheet, Text, View} from 'react-native';

const Heading = 'Upstox Holdings';

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={[Typography.h1, {color: Colors.white}, CommonStyles.fwBold]}>
        {Heading}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.headerBgColor,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
