import { StyleSheet } from 'react-native';
import { Color } from '../../../utils/color';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        height: 2,
        width: '90%',
        backgroundColor: Color.DARK_GRAY,
        margin: 15,
    },
    text: {
        fontSize: 14,
        justifyContent: 'space-around',
        margin: 5,
        // marginHorizontal:10
    },
});
export default styles;