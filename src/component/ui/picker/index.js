import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
// import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const CashPicker = (props) => {
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View style={styles.container}>
      {/* <Icon name={props.icon} color="#000" style={styles.ic}> </Icon> */}
      <Picker
        selectedValue={selectedValue}
        style={styles.pickr}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Select Payment" />
        <Picker.Item label="Cash" value="Cash" />
        <Picker.Item label="Paytm Wallet" value="USA"/>
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin:8 ,
    width: 170,
    borderRadius : 30,
    // marginLeft:40,
    backgroundColor :'#f3ce7d',
    // marginBottom:25
  },
  pickr :{
    height: 35,
    width: 170,
    // paddingLeft: 50,
    // justifyContent: 'space-between',
    borderColor: 'black',
    marginTop: 7 ,
    marginLeft:8,
    marginBottom:7,
    // fontSize : 10
    // borderRadius: 30,

  },
  ic :{
    position: 'absolute',
    left: 14,
    top: 11,
    fontSize: 28,
    fontWeight: 'bold'
  }
});

export default CashPicker;