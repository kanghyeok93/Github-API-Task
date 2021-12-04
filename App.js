import * as React from 'react';
// Modules
import {Provider} from 'react-redux';
// Store
import configure from './src/store/configure';
// Screen
import ScreenRouter from './src/screens/ScreenRouter';
// Component
import GlobalModal from './src/components/modal/GlobalModal';
import ToastMessage from './src/components/toast/ToastMessage';

const store = configure();

const App = () => {
  return (
    <Provider store={store}>
      <ScreenRouter />
      <ToastMessage />
      <GlobalModal />
    </Provider>
  );
};

export default App;
