import { StyleSheet } from "react-native";
import { Color } from "../../../utils/color";
import ThemeUtils from '../../../utils/themeUtils';

const styles = StyleSheet.create({

    ic: {
        backgroundColor: Color.ALICE_BLUE,
        marginHorizontal: 15,
        justifyContent: 'space-between',
        paddingVertical: 15,
        elevation: 10,
        shadowColor: Color.DARK_GRAY,
        shadowOffset: { width: 0, height: 12, },
        shadowOpacity: 1,
        shadowRadius: 10.00,
        // borderWidth: 0,
        borderRadius: 10,
        width: ThemeUtils.relativeWidth(14),
        height: ThemeUtils.relativeHeight(7),
        paddingLeft: 15,
        color: Color.DARK_BLUE,
    },
})

export default styles;