import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import {StocksHoldingsScreen} from '../screens/index.screens';

const Stack = createNativeStackNavigator();

export const StackNavigator = props => {
  console.log(props);
  // screenOptions is the options that will be applied to the screens
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animation: 'none',
  };
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={'StocksHoldingsScreen'}>
      <Stack.Screen
        name={'StocksHoldingsScreen'}
        component={StocksHoldingsScreen}
      />
    </Stack.Navigator>
  );
};
