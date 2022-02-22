import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import Routes from '../../router/routes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetNavigation } from '../../utils/commonFunctions';
import { logOutAction, saveTodo } from '../../redux/reducer/common/action';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import database from '@react-native-firebase/database';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ThemeUtils from '../../utils/themeUtils';
import { Color } from '../../utils';
import SwipeButton from 'rn-swipe-button';
import themeUtils from '../../utils/themeUtils';
import { Button, InputText } from '../../component';

// firebase db reference
const dbRef = database().ref('/Meeting_room/Rooms');
let forceResetLastButton = null;

const mapStateToProps = state => {
    return {
        login: state.login,
        common: state.common
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        logOutAction, saveTodo
    },
        dispatch,
    );

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            online: false,
            revenrseSwipeEnable: false,
            todoForm: {
                topic: "",
                priority: 0
            }
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

    addToDo = () => {
        this.props.saveTodo(this.state.todoForm);
    }

    render() {
        const { todos } = props.common;

        return (
            <SafeAreaView style={styles.container}>
                <Modal
                    visible={true}
                    transparent={true}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "rgba(0,0,0,.7)",
                            padding: themeUtils.relativeWidth(2)
                        }}
                    >
                        <View
                            style={{
                                padding: themeUtils.relativeWidth(10),
                                backgroundColor: Color.WHITE,
                                margin: themeUtils.relativeWidth(5)
                            }}
                        >
                            <InputText
                                placeholder="Task"
                                iconname="work"
                                style={{
                                    marginBottom: 10
                                }}
                                onChangeText={text => this.setState({ todoForm: { ...this.state.todoForm, topic: text } })}

                            />

                            <InputText
                                placeholder="Priority"
                                iconname="email"
                                keyboardType="numeric"
                                onChangeText={text => this.setState({ todoForm: { ...this.state.todoForm, topic: text } })}
                            />

                            <Button
                                name="Add"
                                onPress={this.addToDo}
                            />
                        </View>
                    </View>
                </Modal>

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

                    <TouchableOpacity>
                        <Ionicons name="ios-add-circle-outline" color={Color.PRIMARY} size={ThemeUtils.relativeWidth(13)} />
                    </TouchableOpacity>

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