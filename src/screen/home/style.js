import { StyleSheet } from 'react-native'
import { Color } from '../../utils/color'
import themeUtils from '../../utils/themeUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: themeUtils.relativeWidth(2),
        paddingLeft: themeUtils.relativeWidth(2),
        paddingRight: themeUtils.relativeWidth(2)
    },
    firstSection: {
        flex: 4,
        borderWidth: 1,
        paddingTop: themeUtils.relativeHeight(2)
    },
    secondSection: {
        flex: 6,
        borderWidth: 1
    },
    profile: {
        width: "100%",
        flexDirection: "row",
        justifyContent:"space-between"
    },
    hello: {
        fontSize: themeUtils.responsiveFontSize(18)
    },
    name: {
        fontSize: themeUtils.responsiveFontSize(22),
        fontWeight: "bold"
    }
})
export default styles;