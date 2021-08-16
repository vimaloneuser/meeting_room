import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screen/login/index';
import Routes from './routes'
import SignUp from '../screen/signup';

const Stack = createStackNavigator();

const NotAuthenticated = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={Routes.Login}
        >
            <Stack.Screen name={Routes.Login} component={Login} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SignUp} component={SignUp} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default NotAuthenticated;