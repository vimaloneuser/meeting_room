import {useState, Component} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react';
import { ThemeUtils } from '../../../utils';
import { Alert } from 'react-native';
 const DropDown=( props)=> {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Timber/Plywood/Laminate', value: 'apple'},
    {label: 'Electrical/Electronics', value: 'banana'},
    {label: 'Building/Construction', value: 'Construction'},
    {label: 'House Shifting', value: 'Shifting'},
    {label: 'Furniture/Home Furnishing', value: 'banbdfashgb'},
    {label: 'FMCG/Food Products', value: 'abanbhcdfab'},
    {label: 'Chemicals/Paints', value: 'bacnbdfab'},
    {label: 'Paper/Packing', value: 'banbdfardb'},
    {label: 'Ceramics/Hardware', value: 'banffbdfab'},
    {label: 'Pharmacy/Medical', value: 'banbdfattb'},
    {label: 'Perishable food items', value: 'baniibeedfab'},
    {label: 'Machines/Metals', value: 'baoonbdfooab'},
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      multiple={false}
      min={1}
      max={5}
     // onChangeSearchText={Alert.alert('sandhy')}
      //modalContentContainerStyle={{marginHorizontal:ThemeUtils.relativeWidth(2),marginLeft:100}}
      style={{width:230,height:40,marginLeft:50,borderColor:'white'}}
    />
  );
}
export default DropDown;