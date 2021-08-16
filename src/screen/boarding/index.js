import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Routes from '../../router/routes';
import { Color } from '../../utils/color';
import { Label } from '../../component';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/Octicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onBoardingDoneAction } from '../../redux/reducer/common/action'
import { resetNavigation } from '../../utils/commonFunctions';

const slides = [
  {
    key: 's1',
    text: 'Want to move!',
    title: 'Best offers',
    image: require('../../assets/images/slider1.png'),
  },
  {
    key: 's2',
    title: 'Move Luggage Easily',
    text: 'Helper will pack all luggage and help to Transfer',
    image: require('../../assets/images/slider2.png'),
  },
  {
    key: 's3',
    title: 'Track Your Luggage Location',
    text: 'Enjoy our all services',
    image: require('../../assets/images/slider3.png'),
  },
];



const mapDispatchToProps = dispatch =>
  bindActionCreators({
    onBoardingDoneAction
  },
    dispatch,
  );

class Boarding extends React.Component {

  state = {
    onBoardingDone: false,
  };

  onDone = () => {
    this.setState({ onBoardingDone: true });
    this.props.onBoardingDoneAction(true);
    resetNavigation(this.props.navigation, Routes.NotAuthenticated);
  };

  RenderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="arrow-right" style={{ fontSize: 25, color: Color.WHITE }} />
      </View>
    );
  };
  RenderDoneButton = props => {
    return (
      <TouchableOpacity onPress={this.onDone}>
        <View style={styles.buttonCircle}>
          <Icon
            name="check"
            style={{ fontSize: 25, fontWeight: 'bold', color: Color.WHITE }}
          />
        </View>
      </TouchableOpacity>
    );
  };
  RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Color.WHITE,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Label mt={40} align="center" xxxxlarge bolder>
          {item.title}
        </Label>
        <Image style={styles.introImageStyle} source={item.image} />
        <Label mt={30} align="center" xlarge>
          {item.text}
        </Label>
      </View>
    );
  };
  render() {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={this.RenderItem}
        renderDoneButton={this.RenderDoneButton}
        renderNextButton={this.RenderNextButton}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      />
    );
  }
}

export default connect('', mapDispatchToProps)(Boarding);
