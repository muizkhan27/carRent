import React, { Component } from 'react'
import {
        View,Image,Text,StyleSheet
} from 'react-native';
class CarsList extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return(
        <View style={{backgroundColor:'white'}}>
        <View style={{flex:1,padding:20,
        marginBottom:10,
        flexDirection:'column',
        borderWidth:0.5,
         borderRadius:15,
         elevation:8,
         shadowColor:'black',
         shadowOpacity:1,
         backgroundColor:'white'}}>
            <View style={{flex:2}}>
                  <Image source={this.props.imageUri}  style={{flex:1,alignSelf:'center',width:400,height:200,borderRadius:2,resizeMode:'contain'}}  >
                  </Image>
            </View>
            <View style={{flex:2,padding:10,flexDirection:'row'}}>
            <View style={{flex:1,flexDirection:'column'}}>
                <Text style={styles.txt} >
                    Model</Text>
                <Text style= {styles.vartxt} >
                    {this.props.txt}</Text>
                    <Text style={styles.txt} >
                    Dealer Name</Text>
                    <Text style= {styles.vartxt} >
                    {this.props.dealer}</Text>
            </View>

            <View style={{flex:1,flexDirection:'column'}}>
            <Text style={styles.txt} >
                    Date</Text>
                <Text style= {styles.vartxt} >
                    {this.props.date}</Text>
                    <Text style={styles.txt} >
                   Time</Text>
                    <Text style= {styles.vartxt} >
                    {this.props.time}</Text>
                
                </View>
            </View>
            
            


          </View>
          </View>
        );
    }
}
const styles = StyleSheet.create({
  txt:{
      fontSize:15,
      fontWeight:'bold',
      color:'darkcyan',
      fontFamily:'lucida grande'
    },
    vartxt:{
        fontSize:15,
        fontWeight:'bold',
        fontFamily:'lucida grande'
    }

})

export default CarsList