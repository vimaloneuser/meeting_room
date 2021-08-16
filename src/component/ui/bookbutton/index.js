import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Color } from '../../../utils/color';
import styles from './styles';


export default class BookButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.main_container}
        onPress={this.props.onPress}>
        <LinearGradient
          colors={[Color.GRADIENT1, Color.GRADIENT2]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.button, { width: this.props.ViewWidth, height: this.props.ViewHeight, backgroundColor: this.props.backgroundColor }]}>
          <Text style={[styles.text, { fontSize: this.props.btnFontSize, fontWeight: this.props.btnFontWeight }]}>{this.props.name}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
