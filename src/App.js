import React from 'react';
import { useTranslation } from 'react-i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import '@i18n/index';
import '@config/ReactotronConfig';
import { store, persistor } from '@store/index';

import MainNavigator from './routes';
import { navigationRef } from './routes/RootNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <StatusBar barStyle="dark-content" />

          <MainNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
