import React from 'react'
import { View, Modal } from 'react-native'
import CommonStyle from '../../../utils/commonStyles'
import Color from '../../../utils/color'
import Label from '../label'
import StatusBars from '../StatusBar'


const ModalView = (props) => {
    return (
       <View>
         <StatusBars
          hidden={true}
        />
          <Modal
        backdropOpacity={0.3}
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={props.onRequestClose}
      >
       {props.children}
      </Modal>
       </View>
    )
}

export default ModalView
