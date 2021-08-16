import { StyleSheet } from "react-native";
import { ThemeUtils } from "../../../utils";
import {Color} from "../../../utils/color";

const styles=StyleSheet.create({
    input:{
        fontSize: 18,
        height:ThemeUtils.relativeHeight(6),
        paddingLeft:13,
        borderWidth:1,
        borderRadius:5,
  
    },
    container: {
        flex: 1,
        backgroundColor: Color.BG_COLOR
    }
})
export default styles;