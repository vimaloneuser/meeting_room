import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import Routes from '../../router/routes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetNavigation } from '../../utils/commonFunctions';
import { logOutAction } from '../../redux/reducer/common/action';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const mapStateToProps = state => {
    return {
        login: state.login
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        logOutAction
    },
        dispatch,
    );

class Home extends Component {

    logOut = () => {
        auth().signOut();
        GoogleSignin.signOut();
        resetNavigation(this.props.navigation, Routes.NotAuthenticated);
    }

    render() {
        return (

            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                <Text>Home screen</Text>
                <View style={{ marginTop: 20 }} />
                <Button
                    title="Logout"
                    onPress={this.logOut}
                />
            </View>

        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);