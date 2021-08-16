import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import Routes from '../../router/routes';
import { Status } from '../../component';
import { resetNavigation } from '../../utils/commonFunctions';
import { connect } from 'react-redux';

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

  checkAuthentication = () => {
    setTimeout(() => {
      let { token } = this.props.login;
      if (
        token != null &&
        token != undefined &&
        token != ''
      )
        this.goTo(true);
      else
        this.goTo(false);
    }, 2000);
  };

  goTo = value => {
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
          source={require('../../assets/images/logo.jpg')}
          style={styles.logo}
        />
      </View>
    );
  }
}
export default connect(mapStateToProps, '')(SplashScreen);
