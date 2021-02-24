import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@screens/Home';
import SignUp from '@screens/SignUp';
import Signed from '@screens/Signed';

const { Navigator, Screen } = createStackNavigator();

const MainNavigator = () => {
  const { isSigned } = useSelector((state) => state.auth);

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {!isSigned ? (
        <>
          <Screen name="Home" component={Home} />
          <Screen name="SignUp" component={SignUp} />
        </>
      ) : (
        <Screen name="Signed" component={Signed} />
      )}
    </Navigator>
  );
};

export default MainNavigator;
