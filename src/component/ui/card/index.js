import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

import Label from '../label';
import {Style} from './style';
import {Color, ThemeUtils} from '../../../utils';

export default class Card extends Component {
  render() {
    return (
      <View style={{marginRight: 15}}>

        <TouchableOpacity style={[Style.card, this.props.style]} onPress={this.props.onPress}>
        <Label align="center" color={this.props.labelColor} style={{fontWeight: '600'}} small mt={ThemeUtils.relativeHeight(1)}> {this.props.labelp}</Label>
          
          <View style={{alignSelf:'center'}}>
              <Image style={[Style.img, this.props.imgstyle]} resizeMode='cover' source={this.props.img} />
          </View>
           
          <Label align="center" color={this.props.labelColor} style={{fontWeight: '600'}} small mt={ThemeUtils.relativeHeight(3)}> {this.props.label}</Label>

          <Label align="center" color={this.props.labelColor} style={{fontWeight: '600'}} small mt={ThemeUtils.relativeHeight(1)}> {this.props.time}</Label>


        </TouchableOpacity>
      </View>
    );
  }
}
