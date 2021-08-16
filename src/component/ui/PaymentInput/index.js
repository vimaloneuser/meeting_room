import React, { Component } from 'react'
import { Text, TextInput, View,StyleSheet } from 'react-native'

import Label from '../label/index'
import styles from './style';

export class PaymentInput extends Component {
    render() {
        return (
            <View style={styles.container}>
               <Label mt={10}>
                   {this.props.name}
               </Label>
               <View>
                   <TextInput style={styles.input}
                   ref={this.props.ref} 
                keyboardType={this.props.keyboardType}
                placeholder={this.props.placeholder} 
                onChangeText={this.props.onChangeText} 
                value={this.props.value}
                onBlur={this.props.onBlur}
                error={this.props.error}/>

                   
               </View>
            </View>
        )
    }
}

export default PaymentInput;

