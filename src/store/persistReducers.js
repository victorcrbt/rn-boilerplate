import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistReducers = persistReducer(
    {
      key: 'cashless365',
      storage: AsyncStorage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persistReducers;
};
