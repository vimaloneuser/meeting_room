import React from 'react';
import {View, TouchableHighlight, Text, TouchableOpacity} from 'react-native';
import {Color} from '../../../utils/color';
//import {fontXSmall, fontSmall, fontNormal, fontLarge, fontXLarge} from 'src/utils/theme';
import Theme from '../../../utils/themeUtils';
import PropTypes from 'prop-types';

class RoundButton extends React.Component {
  // onClick = () => {
  //   if (this.props.click) this.props.click();
  // };

  render() {
    let btnContainerStylesArray = [];
    let btnTextStylesArray = [];
    if (this.props.btn_xs) {
      btnContainerStylesArray.push({paddingHorizontal: 20, paddingVertical: 5});
      btnTextStylesArray.push({fontSize: Theme.fontXSmall});
    } else if (this.props.btn_sm) {
      btnContainerStylesArray.push({paddingHorizontal: 20, paddingVertical: 7});
      btnTextStylesArray.push({fontSize: Theme.fontSmall});
    } else if (this.props.btn_lg) {
      btnContainerStylesArray.push({paddingHorizontal: 20, paddingVertical: 9});
      btnTextStylesArray.push({fontSize: Theme.fontLarge - 2});
    } else if (this.props.btn_xl) {
      btnContainerStylesArray.push({
        paddingHorizontal: 20,
        paddingVertical: 10,
      });
      btnTextStylesArray.push({fontSize: Theme.fontXLarge - 2});
    } else {
      btnContainerStylesArray.push({paddingHorizontal: 20, paddingVertical: 8});
      btnTextStylesArray.push({fontSize: Theme.fontNormal});
    }
    let btnWholeStyles = [];
    btnWholeStyles.push({
      marginTop: this.props.mt,
      marginBottom: this.props.mb,
      marginStart: this.props.ms,
      marginEnd: this.props.me,
    });
    if (this.props.btn_block) {
      btnWholeStyles.push({
        alignSelf: 'stretch',
      });
    }

    let borderColor = this.props.borderColor
      ? this.props.borderColor
      : this.props.backgroundColor;
    btnContainerStylesArray.push({
      backgroundColor: this.props.backgroundColor,
      borderColor: borderColor,
      alignItems: 'center',
      borderRadius: this.props.border_radius,
      borderWidth: 1,
      borderBottomWidth: 0,
    });
    btnTextStylesArray.push({color: this.props.textColor});

    return (
      <TouchableHighlight style={btnWholeStyles}>
        <View>
          <TouchableOpacity
            style={btnContainerStylesArray}
            rippleContainerBorderRadius={30}
            onPress={this.onClick}>
            <Text style={btnTextStylesArray}>
              {this.props.text}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableHighlight>
    );
  }
}

RoundButton.defaultProps = {
  ...TouchableHighlight.defaultProps,
  textColor: Color.WHITE,
  backgroundColor: Color.PRIMARY,
  btn_xs: false,
  btn_sm: false,
  btn_lg: false,
  btn_xl: false,
  btn_block: false,
  border_radius: 0,
  mt: 0,
  mb: 0,
  ms: 0,
  me: 0,
};
RoundButton.propTypes = {
  ...TouchableHighlight.propTypes,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  btn_xs: PropTypes.bool,
  btn_sm: PropTypes.bool,
  btn_lg: PropTypes.bool,
  btn_xl: PropTypes.bool,
  btn_block: PropTypes.bool,
  border_radius: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ms: PropTypes.number,
  me: PropTypes.number,
};
export default RoundButton;