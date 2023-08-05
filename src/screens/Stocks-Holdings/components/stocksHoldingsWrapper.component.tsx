import React, {FC} from 'react';
import {Error, Loading} from '../../../components/index.components';

interface StocksHoldingsWrapperProps {
  isLoading: boolean;
  isError: boolean;
  children: JSX.Element;
}

export const StocksHoldingsWrapper: FC<StocksHoldingsWrapperProps> = ({
  isLoading = false,
  isError = false,
  children,
}) => {
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return <>{children}</>;
};
