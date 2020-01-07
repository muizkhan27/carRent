import React, { Component } from 'react'

import {
        View,Text,Image,StyleSheet
} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import {Header,Left,Icon, Right, Container} from 'native-base';
import Scheduled from '@components/Booking/Scheduled.js'
import History from '@components/Booking/History.js'
class Booking extends Component{

    constructor(props){
        super(props)
    }
    static navigationOptions = {
        
        drawerLabel: 'Booking',
        drawerIcon: ({ tintColor }) => (
            <Icon name ='calendar' size={20}></Icon>

        ),
      };
     
    render() {

        return(
            <View style={styles.container}>
               <Header style={{justifyContent:'flex-start',backgroundColor:'coral'}}>
                  <Left>
                         <Icon  name='menu' onPress={()=>this.props.navigation.openDrawer()}>
                           
                         </Icon>
                     </Left>
                     <Text style={{padding:100,alignSelf:'center',fontSize:17,justifyContent:'center'}}> Booking</Text>
                     <Right>
                        <Icon name ='search'onPress={()=>this.SearchBar.show()}></Icon>
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
                shadowColor:'red'
        },
        style:{backgroundColor:'#98B438'}
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
    
    }
  });

export default Booking