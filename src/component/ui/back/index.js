import React ,{Component}from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import { Color } from '../../../utils/Color'
import Label from '../label';
// import Search from '../Search';
// import FloatingInputText from '../FloatingInputText'
import { CommonStyle, ThemeUtils } from '../../../utils'




class Back extends  Component{
    render(){
        return(
            <View>
            <TouchableOpacity onPress={this.props.onPress}>
                <Icon name={this.props.name} size={25} style={styles.ic}/>
            </TouchableOpacity>
            </View>
            
        )
    }
}


export default Back