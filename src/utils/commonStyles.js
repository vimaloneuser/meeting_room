import { StyleSheet } from "react-native";
import { Color } from "./color";
import ThemeUtils from "./themeUtils";

const Style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: Color.WHITE
    },
    content1: {
        flex: 1,
        backgroundColor: Color.BG_COLOR
    },
    Gradient: {
        width: ThemeUtils.relativeWidth(100),
        // height: ThemeUtils.relativeHeight(100),
        height: '100%',
        opacity: 0.95,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        alignSelf: 'center',
        height: ThemeUtils.relativeHeight(20),
        width: ThemeUtils.relativeWidth(45),
        marginTop: 150
    },
    content: {
        height: ThemeUtils.relativeHeight(62),
        width: ThemeUtils.relativeWidth(100),
        paddingHorizontal: 20,
        backgroundColor: Color.WHITE,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    },
    ls_container: {
        width: "100%",
        height: "20%",
        top: ThemeUtils.relativeWidth(5)
    },
    ls_container2: {
        width: "100%",
        height: "80%",
        justifyContent: "center"
    },
    ls_container3: {
        marginTop: ThemeUtils.relativeHeight(10),
        alignItems: "center",
        paddingBottom: ThemeUtils.relativeWidth(5)
    },
    border: {
        width: '100%',
        alignItems: "flex-start"
    },
    endLine: {
        borderWidth: 0.5,
        borderColor: Color.DARK_GRAY,
        marginVertical: 3,
        opacity: 0.5,
        marginHorizontal: 30,
    },
    modalStyle: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: Color.BLACK,
        borderTopStartRadius: 18,
        borderTopEndRadius: 18,
    },
    nointernetMessage: {
        justifyContent: 'center',
        height: ThemeUtils.relativeHeight(5),
        width: '100%',
        backgroundColor: Color.PRIMARY,
        alignItems: 'center',
    },
    nointernetText: {
        color: Color.WHITE,
        // fontFamily: FONT_FAMILY.SEMIBLOD,
        fontSize: ThemeUtils.responsiveFontSize(11)
    },
    screenOverlay: {
        flex: 1,
    }
});

export default Style;