import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Color from '../../../utils/color'
import CloseIcon from 'react-native-vector-icons/Octicons';


class InputText extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name={this.props.iconname} style={styles.iconStyle} />
        <TextInput
          style={styles.username}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
          secureTextEntry={Boolean(this.props.secureTextEntry)}
          value={this.props.value}
          maxLength={this.props.maxLength}
          keyboardType={this.props.keyboardType}
        />
        <CloseIcon
          name={this.props.CloseIconName}
          size={24}
          color={this.props.closeColor}
          style={styles.eyeIcon}
          onPress={this.props.onPress}
        />
      </View>

    );
  }
}

export default InputText;
