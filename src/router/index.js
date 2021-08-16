import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NonAuthenticated from './nonAuthentication';
import Authenticated from './authentication';
import SplashScreen from '../screen/splashscreen/index';
import Routes from './routes';
import Boarding from '../screen/boarding';
import DemoScreen from '../screen/DemoScreen';
import linking from '../../linking';
const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer linking={linking} >
      <Stack.Navigator initialRouteName={Routes.SplashScreen} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} />
        <Stack.Screen name={Routes.NotAuthenticated} component={NonAuthenticated} />
        <Stack.Screen name={Routes.Authenticated} component={Authenticated} />
        <Stack.Screen name={Routes.Demo} component={DemoScreen} />
        <Stack.Screen name={Routes.Boarding} component={Boarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
