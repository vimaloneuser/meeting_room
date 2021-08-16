import React, { Component } from 'react'
import { Image,  View } from 'react-native'
import CommonStyles from '../../../utils/commonStyles'
import * as Animatable from 'react-native-animatable'

export class Logo extends Component {
    render() {
        return (
            <View>
               <Animatable.Image
                animation="fadeInLeft"
                iterationDelay={400} 
                source={require("../../../assets/images/logo.jpg")}
                style={CommonStyles.logo} />
            </View>
        )
    }
}

export default Logo
