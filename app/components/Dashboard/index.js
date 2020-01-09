import React, { Component } from 'react'
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Home from '@components/Home'
import Settings from '@components/Settings'
import Feedback from '@components/Feedback'
import Login from '@components/Login'
import { View, Image,Text,TouchableHighlight, Alert  } from 'react-native';
import { gestureHandlerRootHOC,ScrollView, TouchableOpacity, } from 'react-native-gesture-handler';
import Booking from '../Booking';
import  Icon  from 'react-native-vector-icons/Feather';


class Dashboard extends Component{

    static navigationOptions ={
        header:null
    }
   
    render() {
        return(
            <App/>
        );
    }
}



const customDrawerComponent=(props)=>(
    
    <SafeAreaView style={{flex:1}}>
        <View style={{height:160,backgroundColor:'coral',alignItems:'center',padding:10}}>
            <Image  source={require('./logo1.jpg' )} style={{height:100 ,width:100,borderRadius:20,alignItems:'center',justifyContent:'center'}}></Image>
            <Text>Profile name</Text>
        </View> 
 <View>
           <DrawerItems {...props}></DrawerItems>
           <View
                    style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: 0.5
                    }}/>
        <TouchableHighlight underlayColor='lightgrey' activeOpacity={0.8} onPress={() => props.navigation.navigate('login')}>
        <View style={{padding:10,marginHorizontal:10,flexDirection:'row'}}>
               <Icon name='mail' size={25}></Icon>
                <Text style={{paddingHorizontal:30,fontWeight:'bold',fontSize:15}}>Contact Us</Text>
            </View> 
        </TouchableHighlight>
        <TouchableHighlight underlayColor='lightgrey'activeOpacity={0.8} onPress={() => props.navigation.navigate('login')}>
        <View style={{padding:10,marginHorizontal:10,flexDirection:'row'}}>
               <Icon name='log-out'  size={25}></Icon>
                <Text   style={{paddingHorizontal:30,fontWeight:'bold',fontSize:15}}>Logout</Text>
            </View> 
        </TouchableHighlight>
             
 </View>
          
           
       
            
            
    </SafeAreaView>
)
const MyApp =  createDrawerNavigator({

    home:{
      screen:Home
    },
    booking:{
        screen:Booking
    },
    settings:{
        screen:Settings
    },
    feedback:{
        screen:Feedback,
       
    },
   

        
   
    
    
},
 {
    drawerBackgroundColor:'whiteSmoke',
    drawerPosition:'left',
    drawerType:'slide',
    contentOptions:{activeTintColor:'coral',
    


},
    contentComponent:customDrawerComponent
})

const App = createAppContainer(MyApp);
export default Dashboard