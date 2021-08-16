import React, {Component} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import Routes from '../../../router/routes';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Home from '../../../screen/home/index';
import {Color} from '../../../utils/color';
import Orders from '../../../screen/orders/index'
import Payment from '../../../screen/payment/index';
import Profile from '../../../screen/profile/index';
import Wallet from '../../../screen/wallet/index'
// import Profile from '../../../screen/Profile';
// import MyBooking from '../../../screen/MyBooking';

const Tab = createMaterialBottomTabNavigator();

class BottomTab extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        creenOptions={{
          tabBarOptions: {
            style: {
              backgroundColor: Color.BLUE,
            },
          },
        }}
        activeColor={Color.WHITE}
        inactiveColor={Color.SKIN}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: Color.BLUE,
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{
            tabBarLabel: 'Orders',
            tabBarColor: Color.BLUE,
            tabBarIcon: ({color}) => (
              <Icon name="reorder-four" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            tabBarLabel: 'Wallet',
            tabBarColor: Color.BLUE,
            tabBarIcon: ({color}) => (
              <Icon name="wallet" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Account',
            tabBarColor: Color.BLUE,
            tabBarIcon: ({color}) => (
              <Icon name="ios-person-sharp" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
export default BottomTab;