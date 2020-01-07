import React, { Component } from 'react'
import {
        View,Image,Text
} from 'react-native';
class CarsList extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return(
            <View style={{backgroundColor:'white'}}>
            <View style={{flex:1,padding:20,marginBottom:5,flexDirection:'column',borderRadius:10,borderWidth:0.5,shadowColor:'black',shadowRadius:10,shadowOpacity:1,backgroundColor:'#f5f5f5'}}>
            <View style={{flex:2}}>
                  <Image source={this.props.imageUri}  style={{flex:1,alignSelf:'center',width:400,height:200,borderRadius:2,resizeMode:'contain'}}  >
                  </Image>
            </View>
            <View style={{flex:2,flexDirection:'column'}}>
            <Text style=
                 {{fontSize:15,fontWeight:'bold',color:'darkcyan',fontFamily:'lucida grande'}} >
                    Model:</Text>
                <Text style=
                 {{fontSize:15,fontWeight:'bold',fontFamily:'lucida grande'}} >
                    {this.props.txt}</Text>
                    <Text style=
                 {{fontSize:15,fontWeight:'bold',color:'darkcyan',fontFamily:'lucida grande'}} >
                    Dealer Name:</Text>
                    <Text style=
                 {{fontSize:15,fontWeight:'bold',fontFamily:'lucida grande'}} >
                    {this.props.dealer}</Text>
            </View>


          </View>
          </View>
        );
    }
}

export default CarsList