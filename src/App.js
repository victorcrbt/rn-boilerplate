import React from 'react';
import { useTranslation } from 'react-i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar, Text } from 'react-native';

import '@i18n/index';
import '@config/ReactotronConfig';
import { store, persistor } from '@store/index';

const App = () => {
  const { t } = useTranslation();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="dark-content" />

        <Text>{t('home')}</Text>
      </PersistGate>
    </Provider>
  );
};

export default App;
