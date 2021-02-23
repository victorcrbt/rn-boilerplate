import React from 'react';
import { StatusBar, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import '@i18n/index';

const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Text>{t('home')}</Text>
    </>
  );
};

export default App;
