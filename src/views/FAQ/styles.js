import { StyleSheet } from "react-native";
import {config} from "../../../config/gluestack-ui.config";
const { colors } = config.tokens;

export const styles = StyleSheet.create({
    input: {
        backgroundColor:colors.input,
        color:colors.white,
        borderColor: colors.border,
        borderRadius:30,
        marginTop:20,
        borderWidth: 2,
        minHeight:32,
        minWidth:145,
        paddingLeft:10,
    },
    button: {
        backgroundColor:colors.button,
        borderRadius:30,
        borderWidth:2,
        borderColor:colors.buttonBorder,
        color:colors.white,
        alignItems:'center',
        justifyContent:'center',
        minWidth:220,
        minHeight:32,
        marginTop:10,
        text:{
            color:colors.white,
        }
    },
})
