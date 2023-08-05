import React, {FC} from 'react';
import {AppNavigator} from './src/navigator/index.navigatior';
const App: FC<any> = props => {
  return <AppNavigator props={props} />;
};

export default App;
