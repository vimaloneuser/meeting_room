import { StyleSheet } from 'react-native'
import { Color } from '../../../utils/color'
import ThemeUtils from '../../../utils/themeUtils';

const styles = StyleSheet.create({
    main_container: {
        alignItems: 'flex-end'
    },
    button: {
        width: 150,
        height: 48,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    text: {
        color: Color.WHITE,
        fontSize: 18,
        fontWeight: 'bold'
    },
})

export default styles