import React, { Component } from 'react'
import {
    TouchableHighlight,View,Image,Text,Button,StyleSheet
} from 'react-native';
import { withTheme } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
class Car extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return(
            <View style={styles.car_box}>
            <View >
                  <Image style={styles.image_style} source={this.props.imageUri}  >
                  </Image>
                  <Text style={{color:'#727272',paddingVertical:5,paddingHorizontal:5}}>lorem wgfiweiof ewgf8weyf iuwegf8weiw weyr89yq3 9y9r8yq yer98y34 etyr98 yq349ew yr9834y cyf8ye 98reg iger jfb
                      uehf98eh iufhe iurfnjwe ciuer gfiuer hui erhf  ei
                  </Text>
            </View>

            <View style={{flexDirection:'row',paddingLeft:10, paddingVertical:5}} >
            <Text style={{fontWeight:'bold'}} >
                    Name:</Text>
                <Text  >
                    {this.props.txt}</Text>
                    
            </View>
            <View style={{flexDirection:'row',paddingLeft:10}} >
            <Text style={{fontWeight:'bold'}} >
                    Model:</Text>
                <Text  >
                    2014</Text>
                    
            </View>
           <View style={{flexDirection:"row-reverse"}}>
               
               {/* <View  ><Button color='#cf0202' title='Remove'></Button></View>
               <View style={{marginRight:5}}><Button color='#f3b909' title='Edit Details'></Button></View> */}
               <TouchableHighlight
         style={styles.buttonRed}
         onPress={this.onPress}
        >
            <View style={{flexDirection:'row'}}>
            <Icon name='delete' style={styles.icon_btn}></Icon>
         <Text style={styles.icon_txt}> Remove </Text></View>
        </TouchableHighlight>
               <TouchableHighlight
         style={styles.buttonOrg}
         onPress={this.onPress}
        >
            <View style={{flexDirection:'row'}}>
            <Icon name='edit' style={styles.icon_btn}></Icon>
         <Text style={styles.icon_txt}> Edit Details </Text></View>
        </TouchableHighlight>
        

           </View>


          </View>
        );
    }
}
 const styles=StyleSheet.create({
     car_box:{
         backgroundColor:'white',
         padding:10,
         shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 4,
        borderRadius:4,
        margin:15
     },
     image_style:{
         flex:1,
         alignSelf:'center',
         resizeMode:"contain",
         height:200,
         width:300,
         borderRadius:2
     },
     icon_btn:{
        fontSize:15,
        marginTop:3,
        color:'white'
     },
     icon_txt:{
        fontSize:15,
        color:'white'
     },
     buttonOrg:{
        backgroundColor:'#f3b909',
        marginRight:10,
        padding:6,
        borderRadius:5
     },buttonRed:{
         backgroundColor:'#d30707',
         padding:6,
         borderRadius:5
     }
 })
export default Car