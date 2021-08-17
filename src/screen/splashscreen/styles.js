import { Platform, StyleSheet } from 'react-native';
import { Color } from '../../utils/color';
import ThemeUtils from '../../utils/themeUtils';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Color.PRIMARY,
        width: ThemeUtils.relativeWidth(100),
        height: ThemeUtils.relativeHeight(100),
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === 'ios' ? 20 : 0

    },
    logo: {
        height: ThemeUtils.relativeHeight(70),
        width: '100%',
        alignItems: 'center',
    },
    footer: {
        position: 'absolute',
        bottom: 75,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 65
    },
    line: {
        height: ThemeUtils.relativeHeight(0.2),
        width: ThemeUtils.relativeWidth(7),
        backgroundColor: Color.BLACK,

    }
});
export default styles;