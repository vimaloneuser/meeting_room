import { StyleSheet } from 'react-native'
import { Color } from '../../utils/color'
import themeUtils from '../../utils/themeUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E2138"
    },
    firstSection: {
        flex: 3,
        paddingTop: themeUtils.relativeWidth(2),
        paddingLeft: themeUtils.relativeWidth(3),
        paddingRight: themeUtils.relativeWidth(3)
    },
    secondSection: {
        flex: 7,
        borderTopLeftRadius: themeUtils.relativeWidth(6),
        borderTopRightRadius: themeUtils.relativeWidth(6),
        backgroundColor: "#F8F9FB",
        paddingLeft: themeUtils.relativeWidth(4),
        paddingRight: themeUtils.relativeWidth(4),
        paddingTop: themeUtils.relativeWidth(5)
    },
    profile: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: themeUtils.relativeHeight(2),
        marginBottom: themeUtils.relativeHeight(2)
    },
    hello: {
        fontSize: themeUtils.responsiveFontSize(18),
        color: "#90919C"
    },
    name: {
        fontSize: themeUtils.responsiveFontSize(20),
        fontWeight: "bold",
        color: Color.WHITE
    },
    card: {
        height: themeUtils.relativeHeight(25),
        width: "100%",
        backgroundColor: Color.WHITE,
        borderRadius: themeUtils.relativeWidth(3)
    },
    headingDot: {
        height: 10, width: 10, backgroundColor: "red", borderRadius: 10 / 2
    },
    cardHeading: {
        flexDirection: "row",
        alignItems: "center"
    },
    headingTitle: {
        fontSize: themeUtils.responsiveFontSize(20),
        marginLeft:themeUtils.responsiveFontSize(20)
    }
})
export default styles;