import React, { Component } from 'react'
import {
        View,Image,Text
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Right, Left } from 'native-base';
class Popular extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return(
            <View style={{height:150,width:150,elevation:3,shadowColor:'black',shadowOpacity:1,shadowRadius:6,borderRadius:5,margin:10,borderWidth:0.5,borderColor:'grey'}}>
            <View style={{flex:2}}>
                  <Image source={this.props.imageUri}  style={{flex:1,height:null,borderRadius:5,width:null,resizeMode:'cover'}}  >

                  </Image>
            </View>
            <View style={{flex:1,flexDirection:'row'}}>
                <Left>
                <Text style=
                 {{flex:1,fontSize:17,fontWeight:'bold',fontFamily:'lucida grande',paddingHorizontal:5,color:'crimson'}} >
                  {this.props.txt}</Text>
                    </Left> 
                
                  <Right>
                 <Rating style={{flex:1,padding:10}} readonly={true}    imageSize={12} startingValue={this.props.ratings}  ></Rating>
                     <View style={{paddingTop:5,flexDirection:'row',bottom:5,alignSelf:'center'}}>
                     <Text style={{color:'coral',fontSize:16}}>{this.props.ratings}</Text>
                    <Text style={{fontSize:10,paddingTop:5}}> ({this.props.ratings_num})</Text>
                     </View>
                     

                 </Right>
           
            </View>
           

          </View>

        );
    }
}

export default Popular