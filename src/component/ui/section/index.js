import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Section = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      {/* <Text style={styles.line}></Text>
      <View style={styles.line}></View> */}
    </View>
  );
};

export default Section;
