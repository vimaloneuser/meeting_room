import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
// import Label from '../label';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Color, ThemeUtils } from '../../../utils';
export default class SocialButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
        <Icon size={ThemeUtils.relativeWidth(6)} color={Color.PRIMARY} name="google" />
        <Text style={styles.text}>{this.props.btntext}</Text>
      </TouchableOpacity>
    );
  }
}
