import * as React from 'react';
// Modules
import {Provider} from 'react-redux';
// Store
import configure from './src/store/configure';
// Screen
import ScreenRouter from './src/screens/ScreenRouter';
import Loading from './src/screens/global/Loading';

const store = configure();

const App = () => {
  return (
    <Provider store={store}>
      <ScreenRouter />
      <Loading />
    </Provider>
  );
};

export default App;
