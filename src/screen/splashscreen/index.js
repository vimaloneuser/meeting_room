import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import styles from './styles';
import Routes from '../../router/routes';
import { Status } from '../../component';
import { resetNavigation } from '../../utils/commonFunctions';
import { connect } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const mapStateToProps = state => {
  return {
    login: state.login,
    common: state.common
  };
};


class SplashScreen extends React.Component {

  componentDidMount() {
    this.checkAuthentication();

  }

  checkAuthentication = async () => {
    let user = await auth().currentUser;
    setTimeout(() => {
      if (user?._user)
        this.goTo(true);
      else
        this.goTo(false);
    }, 2000);
  };

  goTo = value => {
    console.log(value, "value......snsnsn")
    let _props = this.props.navigation;
    if (!value) {
      let { boarding } = this.props.common;
      if (boarding)
        resetNavigation(_props, Routes.NotAuthenticated);
      else
        resetNavigation(_props, Routes.Boarding);
    }
    else
      resetNavigation(_props, Routes.Authenticated);
  };

  render() {
    return (
      <View style={styles.container}>
        <Status hidden={true} />
        <Image
          source={require('../../assets/images/splash.png')}
          style={styles.logo}
        />
        <ActivityIndicator
          size="large"
          color="#fff"
          style={{ position: "absolute", bottom: heightPercentageToDP(3) }}
        />
      </View>
    );
  }
}
export default connect(mapStateToProps, '')(SplashScreen);
