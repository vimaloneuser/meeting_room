import { StyleSheet } from 'react-native'
import { Color } from '../../utils/color'
import ThemeUtils from '../../utils/themeUtils';

const styles = StyleSheet.create({
    introImageStyle: {
        width: ThemeUtils.relativeWidth(82),
        height: ThemeUtils.relativeHeight(30)
    },
    buttonCircle: {
        marginTop: 4,
        width: 40,
        height: 40,
        backgroundColor: Color.BLUE,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotStyle: {
        backgroundColor: Color.DARK_GRAY,
    },
    activeDotStyle: {
        backgroundColor: Color.BLUE,
    },
});

export default styles