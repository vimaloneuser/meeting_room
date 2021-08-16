import { StyleSheet } from 'react-native';
import { Color, ThemeUtils } from '../../../utils';

export const Style = StyleSheet.create({
    card: {
        height: ThemeUtils.relativeHeight(25),
        width: ThemeUtils.relativeWidth(35),
        marginVertical: 7,
        // paddingBottom:10,
        borderRadius: 20,
        elevation: 5,
        // shadowColor: '#000',
        // shadowOffset: {width: 0, height: 1},
        // shadowOpacity: 0.5,
        // shadowRadius: 2,
        // shadowColor: '#000',
        backgroundColor: Color.WHITE,
        justifyContent: 'center',
        marginLeft: 2
    },
    img: {
        marginTop: 10,
        borderRadius: 10,

        width: ThemeUtils.relativeHeight(12),
        height: ThemeUtils.relativeHeight(10),
    },
});