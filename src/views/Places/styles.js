import { StyleSheet } from "react-native";
import {config} from "../../../config/gluestack-ui.config";
const { colors } = config.tokens;

export const styles = StyleSheet.create({
    search: {
        flex: 1,
        backgroundColor:colors.input,
        color:colors.white,
        borderColor: colors.border,
        borderRadius:30,
        marginTop:20,
        borderWidth: 2,
        height:32,
        margin:10,
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
        minWidth:145,
        height:32,
        marginTop:10,
        text:{
            color:colors.white,
        }
    },
    text:{
        color:colors.white,
        fontSize:16,
    },
    card:{
        marginTop:10,
        alignItems: 'center',
        backgroundColor:colors.input,
        borderWidth:2,
        borderColor:colors.border,
        borderRadius:5,
        width:'95%',
        flexDirection:'row',
        height:200,
        logo:{
            width: 150,
            height: 150,
            borderRadius:100,
            borderWidth:2,
            borderColor:colors.white
        },
    }
})
