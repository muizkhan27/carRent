import React, { Component } from 'react'
import {
        View,Text,Button,Image,StyleSheet,ScrollView,TouchableWithoutFeedback
} from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import {Header,Left,Icon,Right} from 'native-base';
import { SliderBox } from "react-native-image-slider-box"; 
import SearchBar from 'react-native-searchbar';
import ProgressCircle from 'react-native-progress-circle';
import Booking from './../DealerBookings/Booking'
class Summary extends Component{

    constructor(props){
        super(props)
    }
    static navigationOptions = {
        header:null,
  
          drawerLabel: 'Summary',
          drawerIcon: ({ tintColor }) => (
            <Icon name ='home' size={30}></Icon>
          ),
        };

    render() {
        return(
            <View style={{flex:1,backgroundColor:'#fafafa'}}>
                            <View style={{elevation:100}}><Header style={styles.header}>
                  <Left>
                      <View style={{flexDirection:'row'}}>
                      <Icon style={{color:'#a2a2a2'}}  name='menu' onPress={()=>this.props.navigation.openDrawer()}>
                           
                           </Icon>
                           <Text style={{paddingTop:3,paddingLeft:20,fontSize:17,color:'#2c2c2c'}}> Summary</Text>
                      </View>
                         
                     </Left>
                     
                 </Header>
                 </View>
                 <ScrollView>
                 <View style={{backgroundColor:'white',borderRadius:4,elevation:4}}>
                     <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:10,paddingLeft:20,paddingRight:40}}>
                         <Text style={{color:'#505050',fontSize:14}}>
                             Total Cars Listed:
                         </Text>
                         <Text style={{color:'#03b5ff',fontSize:14}}>35</Text>
                     </View>
                     <View style={{flexDirection:"row",justifyContent:'space-between',paddingVertical:10,paddingLeft:20,paddingRight:40}}>
                         <Text style={{color:'#505050',fontSize:14}}>
                             Ratings:
                         </Text>
                         <Text style={{color:'#03b5ff',fontSize:14}}>4.8/5</Text>
                     </View>
                     <View style={{flexDirection:"row",justifyContent:'space-between',paddingVertical:10,paddingLeft:20,paddingRight:40}}>
                         <Text style={{fontWeight:"bold",fontSize:14}}>
                             Total Rides Booked:
                         </Text>
                         <Text style={{color:'#03b5ff',fontSize:14}}>10000</Text>
                     </View>
                     <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:10}}>
                     <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
                     <ProgressCircle percent={75} radius={55} borderWidth={10} color="#03b5ff" shadowColor="#e6e6e6" bgColor="#fff">
            <Text style={{ fontSize: 26 }}>{'75%'}</Text>
        </ProgressCircle>
        <Text style={{fontSize:20,color:'#505050'}}> Customer{"\n"}Satisfaction</Text>
                     </View>
                     <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
                     <ProgressCircle percent={75} radius={55} borderWidth={10} color="#03b5ff" shadowColor="#e6e6e6" bgColor="#fff">
            <Text style={{ fontSize: 26 }}>{'75%'}</Text>
        </ProgressCircle>
    <Text style={{fontSize:20,color:'#505050'}}>Positive{"\n"}Ratings</Text>
                     </View>
                     </View>
                     <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:10,paddingLeft:20,paddingRight:40}}>
                         <Text style={{color:'#505050',fontSize:14}}>
                             Response Rate:
                         </Text>
                         <Text style={{color:'#03b5ff',fontSize:14}}>35</Text>
                     </View>
                 </View>
                <View style={{backgroundColor:'white',marginTop:10,marginHorizontal:10,borderRadius:4,elevation:4,paddingVertical:10,paddingHorizontal:10}}>
                    <Text style={{fontSize:20,color:'#505050'}}>Earnings:</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:35,paddingVertical:5}}>
                        <Text style={{color:'#606060',fontSize:18}}>This Month</Text>
                        <Text style={{color:'#03b5ff',fontSize:18}}>RS.21000</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:35,paddingVertical:5}}>
                        <Text style={{color:'#606060',fontSize:18}}>Earned So Far</Text>
                        <Text style={{color:'#03b5ff',fontSize:18}}>RS.21000</Text>
                    </View>
                </View>
                <View style={{backgroundColor:'white',marginTop:10,marginHorizontal:10,borderRadius:4,elevation:4,paddingVertical:10,paddingHorizontal:10}}>
                    <Text style={{color:'#808080'}}>Unread Messages</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{color:'#808080'}}>You currently have no messages that you have not responded to</Text>
                        <View style={{borderWidth:1,paddingHorizontal:15,marginLeft:-50,borderRadius:15}}><Text style={{textAlign:'center',paddingTop:5,color:'#03b5ff'}}>0</Text></View>
                    </View>
                 </View>
                 <View style={{backgroundColor:'white',marginVertical:10,marginHorizontal:10,borderRadius:4,elevation:4,paddingVertical:10,paddingHorizontal:10}}>
                     <Text style={{fontSize:20,color:'#505050'}}>Bookings:</Text>
                     <Text style={{color:'#505050'}}>You currently have no booking,Keep yourself active and try responding to people a little bit earlier</Text>
                     

                     </View>
                     </ScrollView>
                 </View>
        );
    }
}
const styles=StyleSheet.create({
    header:{
        justifyContent:'flex-start',
        backgroundColor:'#ffffff',
        elevation:3
    },
    scroll_style:{
        backgroundColor:'white',
        
    },
    car_box:{
        
    }
})

export default Summary