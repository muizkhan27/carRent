import React, { Component } from 'react'
import {
        View,Image,Text
} from 'react-native';
class Popular extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return(
            <View style={{height:150,width:150,borderRadius:5,margin:10,borderWidth:0.5,borderColor:'grey'}}>
            <View style={{flex:2}}>
                  <Image source={this.props.imageUri}  style={{flex:1,height:null,borderRadius:5,width:null,resizeMode:'cover'}}  >

                  </Image>
            </View>
            <View style={{flex:1}}>
                <Text style=
                 {{fontSize:15,fontWeight:'bold',fontFamily:'lucida grande',margin:5}} >
    {                   this.props.txt}</Text>
            </View>

          </View>

        );
    }
}

export default Popular