import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { Color } from '../../utils/color';
import {
    Label,
    InputText,
    Logo,
    Button,
    Loader,
    SocialButton
} from '../../component';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import { validation } from '../../utils/validationUtils';
import CommonStyles from '../../utils/commonStyles';
import { loginUserAction } from '../../redux/reducer/login/action';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles'
import { goto, notifyMsg, resetNavigation } from '../../utils/commonFunctions';
import auth from '@react-native-firebase/auth';
import Routes from '../../router/routes';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const mapStateToProps = state => {
    return {
        login: state.login,
        register: state.register,
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        loginUserAction
    },
        dispatch,
    );

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            isSecurePaswword: true,
            toggleIcon: 'eye-closed',
            loading: false,
        };
        GoogleSignin.configure({
            webClientId: '779129903254-gl0783hrsk9a27ogtee8o7ll3p7qe1a9.apps.googleusercontent.com' // client ID of type WEB for your server (needed to verify user ID and offline access)
        });
    }

    checkValidations = () => {
        let emailError, passwordError, isValid = true;
        emailError = validation('email', this.state.email);
        passwordError = validation('password', this.state.password);
        if (emailError != null || passwordError != null) {
            this.setState({
                emailError: emailError,
                passwordError: passwordError,
            });
            isValid = false;
        } else {
            this.setState({
                emailError: '',
                passwordError: '',
            });
            isValid = true;
        }
        return isValid;
    };

    login = () => {
        if (this.checkValidations())
            this.loginRequest();
    };

    loginRequest = async () => {
        let email, pass;
        email = this.state.email;
        pass = this.state.password;
        console.log(email, pass, "email and pass")
        auth().signInWithEmailAndPassword(email, pass).then(result => {
            console.log(result, " result...")
            if (result) {
                notifyMsg({ message: 'Login successfully' })
                setTimeout(() => {
                    resetNavigation(this.props.navigation, Routes.Authenticated);
                }, 1000);
            }
        }).catch(error => {
            console.log(error)
            if (error.code === 'auth/wrong-password')
                notifyMsg({ message: 'You have entered wrong password!', success: false })
            else if (error.code === 'auth/user-not-found')
                notifyMsg({ message: 'User not found with this email!', success: false })
            else
                notifyMsg({ message: 'Something went wrong,Login failed Try again!', success: false })
        })
    };

    handleToggle = () => {
        this.state.isSecurePaswword ?
            this.setState({ isSecurePaswword: false, toggleIcon: 'eye' }) :
            this.setState({ isSecurePaswword: true, toggleIcon: 'eye-closed' });
    };

    // Somewhere in your code
    _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            auth().signInWithCredential(googleCredential).then(result => {
                if (result?.user) {
                    notifyMsg({ message: 'Registered successfully' });
                    resetNavigation(this.props.navigation, Routes.Authenticated);
                }
            }).catch(() => {
                notifyMsg({ message: 'Something went wrong, Try again!', success: false })
            })
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED)
                notifyMsg({ message: 'You cancelled the login flow!', success: false })
            else if (error.code === statusCodes.IN_PROGRESS)
                notifyMsg({ message: 'operation is in progress already', success: false })
            else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE)
                notifyMsg({ message: 'play services not available or outdated!', success: false })
            else
                notifyMsg({ message: 'Something went wrong,Login failed Try again!', success: false })
        }
    };

    render() {
        return (
            <SafeAreaView style={CommonStyles.container}>
                <Loader loading={false} />
                <View style={styles.container}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
                        enabled={Platform.OS === 'ios' ? true : false} >

                        <View style={CommonStyles.ls_container}>
                            <View style={CommonStyles.border}>
                                <Label xxxxlarge align="center"
                                    bolder color={Color.BLACK}
                                >
                                    Welcome,
                                </Label>
                                <Label xxxlarge align="center"
                                    color={Color.DARK_GRAY}>
                                    Sign in to continue!
                                </Label>
                            </View>
                        </View>

                        <View
                            style={CommonStyles.ls_container2}
                        >


                            <InputText placeholder="Email"
                                iconname="email"
                                onChangeText={text => this.setState({ email: text })}
                                value={this.state.email} />
                            <Label color={Color.ERROR} align="right" normal>
                                {this.state.emailError}
                            </Label>

                            <InputText placeholder="Password"
                                iconname="lock"
                                eyeColor={Color.PRIMARY_DARK}
                                onChangeText={text => this.setState({ password: text })}
                                secureTextEntry={this.state.isSecurePaswword}
                                CloseIconName={this.state.toggleIcon}
                                onPress={this.handleToggle} />
                            <Label color={Color.ERROR} align="right" normal>
                                {this.state.passwordError}
                            </Label>

                            <TouchableOpacity
                                style={{ alignItems: "flex-end" }}
                                onPress={() => goto(this.props.navigation, "SignUp")}
                            >
                                <Label color={Color.PRIMARY}
                                    bolder xxlarge>
                                    Forgot password </Label>
                            </TouchableOpacity>

                            <Button
                                name="Login"
                                onPress={this.login}
                            />
                            <SocialButton
                                onPress={this._signIn}
                                btntext="oogle"
                            />

                            <TouchableOpacity
                                style={CommonStyles.ls_container3}
                                onPress={() => goto(this.props.navigation, "SignUp")}
                            >
                                <Label color={Color.BLACK}
                                    xxlarge >
                                    I am a new user, {''} <Label color={Color.PRIMARY}
                                        bolder xxlarge>
                                        Sign Up </Label>
                                </Label>
                            </TouchableOpacity>
                        </View>



                    </KeyboardAvoidingView>
                </View>
            </SafeAreaView>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
