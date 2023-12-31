import { StyleSheet } from "react-native";
import {config} from "../../../config/gluestack-ui.config";
const { colors } = config.tokens;

export const styles = StyleSheet.create({
    logo:{
        width:133,
        height:145,
        alignSelf:'center',
        marginTop:30,
        marginBottom:20,
        borderWidth:2,
        borderColor:colors.white,
        borderRadius:30
    },
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
        height:50,
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
            borderRadius:90,
            borderWidth:2,
            borderColor:colors.white
        },
    },
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
        padding:15,
        borderRadius:30,
        textAlign:'center',
        alignItems:"center"
    },
    area:{
        backgroundColor:colors.input,
        color:colors.white,
        borderColor: colors.border,
        borderRadius:5,
        marginTop:20,
        borderWidth: 2,
        minHeight:50,
        minWidth:145,
        padding:15,
        textAlign:'center'


    }
})
