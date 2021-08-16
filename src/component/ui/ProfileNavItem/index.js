import React from 'react'
import { View, TouchableHighlight, Image } from 'react-native'
import Label from '../../ui/label'
import {Color} from '../../../utils/color'

const ProfileNavItem = (props) => {

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={Color.HIGHLIGHT_COLOR}
      onPress={props.onPress}
      style={{ marginHorizontal: 30, padding: 15 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={props.iconPath}
        />
        <Label large  color={Color.PRIMARY_DARK} ms={25}>
          {props.label}
        </Label>
      </View>
    </TouchableHighlight>
  )

}
export default ProfileNavItem