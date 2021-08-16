import { StyleSheet } from 'react-native'
import { Color } from '../../../utils/color'
import ThemeUtils from '../../../utils/themeUtils';

const styles = StyleSheet.create({
    main_container: {
        alignItems: 'center'
    },
    button: {
        width: ThemeUtils.relativeWidth(90),
        height: ThemeUtils.relativeHeight(9),
        borderRadius: ThemeUtils.relativeWidth(3),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: ThemeUtils.relativeWidth(3)
    },
    text: {
        color: Color.WHITE,
        fontSize: ThemeUtils.responsiveFontSize(18),
        fontWeight: 'bold'
    },
})

export default styles