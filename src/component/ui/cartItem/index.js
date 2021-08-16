import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Color} from '../../../utils/Color';
import CommonStyle from '../../../utils/commonStyles';
import ThemeUtils from '../../../utils/themeUtils';
import Label from '../label';


const CartItem = props => {
  return (
    <View style={{marginTop: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', marginLeft: 10}}>
          <Image
            source={require('../../../assets/images/logo.jpg')}
            style={{
              height: ThemeUtils.relativeHeight(7),
              width: ThemeUtils.relativeHeight(10),
              marginRight: 10,
            }}
          />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Label bolder small>
              {props.foodItemName}
            </Label>
            <Label bolder small>
              {props.ItemName}
            </Label>
          </View>
        </View>
       
        <Label small>{props.price}</Label>
        
      </View>
     

      <View
        style={[
          CommonStyle.endLine,
          {marginHorizontal: 5, marginTop: 10},
        ]}></View>
    </View>
  );
};

export default CartItem;
