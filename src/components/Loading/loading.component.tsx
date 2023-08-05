import React from 'react';
import {ActivityIndicator, Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors.constants';

const {width: scw} = Dimensions.get('window');

export const Loading: React.FC = () => {
  return (
    <ActivityIndicator
      size={'large'}
      style={styles.container}
      color={Colors.headerBgColor}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shimmer: {
    width: scw,
    height: 60,
    marginTop: 8,
    // marginHorizontal: 16,
  },
  header: {
    width: scw,
    height: 80,
  },
});

export default Loading;
