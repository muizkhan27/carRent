import React, { Component } from 'react'
import {
    TouchableHighlight,View,Image,Text,Button,StyleSheet
} from 'react-native';
import { withTheme ,Rating} from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import MyBookings from '.';
class Booking extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return(
            <View style={{
                flexDirection:'row',
                elevation: 1,
                borderRadius:1,
                paddingVertical:10,margin:2
            }
            }>
                <Image style={styles.user_img} source={this.props.imageUri}></Image>
                <View style={{flexDirection:'column',paddingTop:20}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold'}}>Booked By: </Text>
        <Text>{this.props.name}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
        <Text style={{paddingRight:5,color:'#929292'}}>{this.props.date}</Text>
        <Text style={{color:'#929292'}}>{this.props.time}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>Rating:</Text>
                    <Rating style={{
                        marginTop:5
                    }} imageSize={13}  startingValue="4" readonly={true}/>
                </View>
                </View>
                <View style={{flexDirection:'column',paddingTop:20,paddingLeft:20}}>

                
        <Text style={{fontSize:18,color:'#03b5ff'}}>{this.props.price}</Text>
        <TouchableHighlight
         style={styles.morebtn}
         onPress={this.onPress}
        >
            <View style={{flexDirection:'row'}}>
            <Icon name='info' style={styles.icon_btn}></Icon>
         <Text style={styles.icon_txt}> More Info </Text></View>
        </TouchableHighlight>
        </View>
            </View>

        );}

}
const styles=StyleSheet.create({
    morebtn:{
        backgroundColor:'#03b5ff',
         padding:6,
         marginTop:30,
         borderRadius:5
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
    user_img:{
        height:100,
        width:100,
        borderRadius:50,
        marginTop:10,
        marginLeft:10
    }
})
export default Booking