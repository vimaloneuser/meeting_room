import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes';
import Boarding from '../screen/boarding/index';

const Stack = createStackNavigator();

const bording = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Routes.Boarding}>
      <Stack.Screen name={Routes.Boarding} component={Boarding} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default bording;
