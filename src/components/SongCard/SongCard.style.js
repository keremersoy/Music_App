import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container:{
        padding:10,
        flexDirection:"row",
        justifyContent:"center",
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
    },
    inner_container:{
        padding:10,
        flex: 1,
    },
    title:{
        fontWeight:"bold",
        fontSize:27,
    },
    info_container:{
        flexDirection:"row",
        flex:1,
        alignItems: 'center',
        
    },
    artist:{

    },
    year:{
        marginLeft:10,
        color:"gray",
        fontSize:12,
        marginLeft:10
    },
    content_container:{
        flexDirection:"row",
    },
    sooldout_container:{
        borderWidth: 1,
        borderColor:"red",
        padding:3,
        borderRadius:5,
    },
    sooldout_title:{
        color:"red",
        fontSize:12,
    },
    album:{
        flex:1,
    },
});