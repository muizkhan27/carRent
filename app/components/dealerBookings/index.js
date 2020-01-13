import React, { Component } from 'react'

import {
        View,Text,Image,StyleSheet
} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import {Header,Left, Right, Container} from 'native-base';
import  Icon  from 'react-native-vector-icons/Feather';
import Past from './Past';
import Upcoming from './Upcoming';
import Cancelled from './Cancelled';
import Scheduled from '@components/Booking/Scheduled.js'
import History from '@components/Booking/History.js'
class MyBookings extends Component{

    constructor(props){
        super(props)
    }
    static navigationOptions = {
        
        drawerLabel: 'Booking',
        drawerIcon: ({ tintColor }) => (
            <Icon name ='calendar' size={25}></Icon>

        ),
      };
     
    render() {

        return(
            <View style={styles.container}>
               <Header style={{justifyContent:'flex-start',backgroundColor:'white'}}>
                  <Left>
                         <Icon  name='menu' size={25} onPress={()=>this.props.navigation.openDrawer()}>
                           
                         </Icon>
                     </Left>
                     <Text style={styles.headertxt}> Bookings</Text>
                     <Right>
                        <Icon name ='more-vertical' size={25} ></Icon>
                      </Right>
                 </Header>
                 <App/>
                   
       </View>
                 
       
           
        );
    }
}
const MyApp =createMaterialTopTabNavigator({
    past:{screen:Past,
        navigationOptions:{
            tabBarLabel:'Past',
            tabBarIcon: ({ tintColor }) => (
            <Icon name='clock' size={24}></Icon>
          )
    }},
    upcoming:{screen:Upcoming,
        navigationOptions:{
            tabBarLabel:'Upcoming',
            tabBarIcon: ({ tintColor }) => (
               <Icon name='history' size={24}></Icon>
              )
        }},
        cancelled:{
            screen:Cancelled,
        navigationOptions:{
            tabBarLabel:'Cancelled',
            tabBarIcon: ({ tintColor }) => (
               <Icon name='history' size={24}></Icon>
              )
        }}
},
{
    
    initialRouteName:'past',
    tabBarOptions:{
        activeTintColor:'#03b5ff',
        inactiveTintColor:'black',
        indicatorStyle:{
                backgroundColor:'#03b5ff',
                shadowColor:'#000000'
        },
        style:{backgroundColor:'white'}
    },
   
   
    
})
const App = createAppContainer(MyApp);
const styles = StyleSheet.create({
    icon: {
      width: 20,
      height: 20,
    },
    container:{
      flex:1,
    
    },
    headertxt:{
        padding:100,
        alignSelf:'center',
        fontSize:18,
        justifyContent:'center'
    }
  });

export default MyBookings