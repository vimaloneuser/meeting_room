import React from 'react'
import { RootNavigator } from './src/router'
import { Provider } from 'react-redux'
import store from './src/redux/store';
import { NetworkProvider, NetworkConsumer } from 'react-native-offline';
import { View, Text } from 'react-native';
import Style from './src/utils/commonStyles'


const App = () => {
  return (
    <Provider store={store}>
      <NetworkProvider>
        <NetworkConsumer>
          {({ isConnected }) => (
            <View style={{ flex: 1 }} >
              {
                !isConnected ?
                  <View style={Style.nointernetMessage}>
                    <Text style={Style.nointernetText}>No Internet connection !</Text>
                  </View> : null
              }
              <RootNavigator />
            </View>
          )}
        </NetworkConsumer>
      </NetworkProvider>
    </Provider>

  );
};


export default App;