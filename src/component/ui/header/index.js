import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Color} from '../../../utils/color';
import Label from '../label';
// import EditIcon from 'react-native-vector-icons/Feather'

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <TouchableOpacity onPress={this.props.onPress}>
            <Icon name={this.props.name} size={35} color={Color.WHITE} />
          </TouchableOpacity>
          <Label style={styles.text}>{this.props.Headertext}</Label>
          {/* <EditIcon name={this.props.Edit} size={30} color={Color.WHITE} /> */}
          <TouchableOpacity onPress={this.props.onClick}>  
          <Icon name={this.props.iconName} size={30} color={Color.WHITE}/>
          {/* <EditIcon name={this.props.Edit} size={30} color={Color.WHITE} /> */}
          </TouchableOpacity>  
        </View>
      </View>
    );
  }
}

export default Header;
