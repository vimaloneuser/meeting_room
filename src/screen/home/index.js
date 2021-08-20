import React, { Component } from 'react';
import { Button, View, Text, ScrollView, SafeAreaView } from 'react-native';
import Routes from '../../router/routes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetNavigation } from '../../utils/commonFunctions';
import { logOutAction } from '../../redux/reducer/common/action';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import database from '@react-native-firebase/database';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemeUtils from '../../utils/themeUtils';
import { Color } from '../../utils';
import SwipeButton from 'rn-swipe-button';
import themeUtils from '../../utils/themeUtils';

// firebase db reference
const dbRef = database().ref('/Meeting_room/Rooms');
let forceResetLastButton = null;

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
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            online: false,
            revenrseSwipeEnable: false
        }
    }

    componentDidMount() {
        this.realTimeReading();
    }

    realTimeReading = () => {
        this.realTime = dbRef.on('value', snapshot => {
            let arr = [];
            snapshot.forEach(item => {
                arr.push(item.val());
            });
            this.setState({
                dataList: [...arr]
            })
        })
    }

    componentWillUnmount() {
        dbRef.off('value', this.realTime)
    }

    readData = () => {
        dbRef.once('value')
            .then(snapshot => {
                let arr = [];
                snapshot.forEach(item => {
                    arr.push(item.val());
                });
                this.setState({
                    dataList: [...this.state.dataList, ...arr]
                })
            });
    }

    saveData = () => {
        let registerDate = new Date().getHours(), name = `vimal${Math.random() * 10}`;
        let id = dbRef.push().key;

        let obj = {
            id,
            name,
            registerDate
        }

        database()
            .ref(`/Meeting_room/Rooms/${id}`)
            .set(obj).then(result => {
                console.log(result, "result.....")
            }).catch(err => {
                console.log(err, "error.....")
            })
    }

    updateData = () => {
        let registerDate = new Date().getHours(), name = `vimal${Math.random() * 10}`;
        let id = "-MhSKxVnbEFNX1W9oAWQ";

        let obj = {
            id,
            name,
            registerDate
        }

        database()
            .ref(`/Users/${id}`)
            .set(obj).then(result => {
                console.log(result, "result.....")
            }).catch(err => {
                console.log(err, "error.....")
            })
    }

    logOut = () => {
        auth().signOut();
        GoogleSignin.signOut();
        resetNavigation(this.props.navigation, Routes.NotAuthenticated);
    }

    render() {

        console.log(this.state.dataList, "datalist.....")
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.firstSection}>
                    <View style={styles.profile}>
                        <View>
                            <Text style={styles.hello}>Hello,</Text>
                            <Text style={styles.name}>Vimal!</Text>
                        </View>
                        <View>
                            <Icon name="account-circle" color={Color.PRIMARY} size={ThemeUtils.relativeWidth(13)} />
                        </View>
                    </View>

                    <SwipeButton
                        containerStyles={{ width: "100%" }}
                        railBackgroundColor={Color.DARK_GRAY}
                        railStyles={{
                            backgroundColor: Color.PRIMARY,
                            borderColor: Color.WHITE,
                        }}
                        shouldResetAfterSuccess
                        onSwipeSuccess={() => {
                            this.setState({ online: !this.state.online });
                        }}
                        thumbIconBackgroundColor="#FFFFFF"
                        title={!this.state.online ? "Get in" : "Finished"}
                        titleFontSize={themeUtils.responsiveFontSize(22)}
                        titleStyles={{ fontWeight: "bold" }}
                    />

                </View>
                <View style={styles.secondSection}>
                    <View style={styles.card}>
                        <View style={styles.cardHeading}>
                            <View style={styles.headingDot} />
                            <Text style={styles.headingTitle}>Meeting room 1</Text>
                        </View>
                        <View>
                            <Text>Available places : </Text>
                            <Text>1</Text>
                        </View>
                        <View>
                            <Text>People</Text>
                            <View><Text>Available</Text></View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);