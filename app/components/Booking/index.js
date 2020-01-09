import React, { Component } from 'react'

import {
        View,Text,Image,StyleSheet
} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import {Header,Left, Right, Container} from 'native-base';
import  Icon  from 'react-native-vector-icons/Feather';

import Scheduled from '@components/Booking/Scheduled.js'
import History from '@components/Booking/History.js'
class Booking extends Component{

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
               <Header style={{justifyContent:'flex-start',backgroundColor:'coral'}}>
                  <Left>
                         <Icon  name='menu' size={25} onPress={()=>this.props.navigation.openDrawer()}>
                           
                         </Icon>
                     </Left>
                     <Text style={styles.headertxt}> Booking</Text>
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
    scheduled:{screen:Scheduled,
        navigationOptions:{
            tabBarLabel:'Scheduled',
            tabBarIcon: ({ tintColor }) => (
            <Icon name='clock' size={24}></Icon>
          )
    }},
    history:{screen:History,
        navigationOptions:{
            tabBarLabel:'History',
            tabBarIcon: ({ tintColor }) => (
               <Icon name='history' size={24}></Icon>
              )
        }}
},
{
    
    initialRouteName:'scheduled',
    tabBarOptions:{
        activeTintColor:'black',
        inactiveTintColor:'white',
        indicatorStyle:{
                backgroundColor:'maroon',
                shadowColor:'#98B438'
        },
        style:{backgroundColor:'coral'}
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

export default Booking