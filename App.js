import * as React from 'react';
// Modules
import {Provider} from 'react-redux';
// Store
import configure from './src/store/configure';
// Screen
import ScreenRouter from './src/screens/ScreenRouter';
// Component
import Loading from './src/components/loading/Loading';

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
