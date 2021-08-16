import { StyleSheet } from 'react-native';
import { Color } from '../../../utils/color';
import ThemeUtils from '../../../utils/themeUtils';

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        height: ThemeUtils.relativeHeight(9),
        width: ThemeUtils.relativeWidth(90),
        borderRadius: ThemeUtils.relativeWidth(3),
        alignItems: 'center',
        marginTop: ThemeUtils.relativeHeight(2),
        borderWidth: 1,
        borderColor: Color.DARK_GRAY,
        justifyContent: "center"
    },
    text: {
        fontWeight: 'bold',
        fontSize: ThemeUtils.responsiveFontSize(18),
        letterSpacing: 1,
        color: Color.BLACK
    }

});

export default styles;