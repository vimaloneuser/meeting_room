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
import auth from '@react-native-firebase/auth';
import { goto, notifyMsg } from '../../utils/commonFunctions';

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

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            email: '',
            password: '',
            userError: '',
            emailError: '',
            passwordError: '',
            isSecurePaswword: true,
            toggleIcon: 'eye-closed',
            loading: false
        };
    }

    checkValidations = () => {
        let emailError, passwordError, userError, isValid = true;
        userError = validation('name', this.state.user);
        emailError = validation('email', this.state.email);
        passwordError = validation('password', this.state.password);
        if (emailError != null || passwordError != null || userError != null) {
            this.setState({
                emailError: emailError,
                passwordError: passwordError,
                userError: userError
            });
            isValid = false;
        } else {
            this.setState({
                emailError: '',
                passwordError: '',
                userError: ''
            });
            isValid = true;
        }
        return isValid;
    };

    signUp = () => {
        if (this.checkValidations())
            this.signupRequest();
    };

    signupRequest = async () => {
        let user, email, pass;
        email = this.state.email;
        pass = this.state.password;
        user = this.state.user;

        console.log(email, user, pass, "vimal patel")
        auth().createUserWithEmailAndPassword(email, pass).then(result => {
            console.log(result, " result...")
            if (result?.additionalUserInfo?.isNewUser) {
                notifyMsg({ message: 'Registered successfully' })
                if (result?.user) {
                    result.user.updateProfile({
                        displayName: user
                    }).then(updatedResult => {
                        let auhh = auth().currentUser;
                        console.log(auhh)
                    })
                }
            }
        }).catch(error => {
            if (error.code === 'auth/email-already-in-use')
                notifyMsg({ message: 'That email address is already in use!', success: false })
            else if (error.code === 'auth/invalid-email')
                notifyMsg({ message: 'That email address is invalid!', success: false })
            else
                notifyMsg({ message: 'Something went wrong, Try again!', success: false })
        })
    };

    handleToggle = () => {
        this.state.isSecurePaswword ?
            this.setState({ isSecurePaswword: false, toggleIcon: 'eye' }) :
            this.setState({ isSecurePaswword: true, toggleIcon: 'eye-closed' });
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

                            <InputText placeholder="Name"
                                iconname="supervised-user-circle"
                                onChangeText={text => this.setState({ user: text })}
                                value={this.state.user} />
                            <Label color={Color.ERROR} align="right" normal>
                                {this.state.userError}
                            </Label>

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

                            <Button
                                name="Sign up"
                                onPress={this.signUp}
                            />
                            <SocialButton
                                onPress={this.login}
                                btntext="oogle"
                            />

                            <TouchableOpacity
                                style={CommonStyles.ls_container3}
                                onPress={() => goto(this.props.navigation, "Login")}
                            >
                                <Label color={Color.BLACK}
                                    xxlarge >
                                    Already an user, {''} <Label color={Color.PRIMARY}
                                        bolder xxlarge>
                                        Login </Label>
                                </Label>
                            </TouchableOpacity>

                        </View>

                    </KeyboardAvoidingView>
                </View>
            </SafeAreaView>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);