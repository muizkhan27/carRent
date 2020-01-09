import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:20,
        
        
    },
    headings:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center'
    },
    inputs:{
       fontSize:20,
       fontWeight:'bold',
       padding:10,
       marginBottom:10,
       borderStyle:'solid',
       borderWidth:0.5,
       borderRadius:10,
       borderColor:'red'
    },
    logos:{
        width:200,
        height:200,
        alignSelf:'center'
    },
    btnprop:{
        marginBottom:6,
        marginTop:6,
        borderRadius:10,
        shadowColor:'coral'
    }
})