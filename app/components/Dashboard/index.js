import React, { Component } from 'react'
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Profile from '@components/Profile'
import Settings from '@components/Settings'
import { View, Image } from 'react-native';
import { gestureHandlerRootHOC,ScrollView } from 'react-native-gesture-handler';


const customDrawerComponent=(props)=>(
    <SafeAreaView style={{flex:1}}>
        <View Style={{height:150,backgroundColor:'black'}}>
            <Image source={require('./logo1.jpg' )} style={{height:120 ,width:120,borderRadius:60,alignSelf:'center'}}></Image>

        </View> 
        <ScrollView>
            <DrawerItems {...props}></DrawerItems>
        </ScrollView>
    </SafeAreaView>
)
const MyApp =  createDrawerNavigator({
    profile:{
      screen:Profile
    },
    settings:{
        screen:Settings
    },
    
}, {
    drawerBackgroundColor:'white',
    drawerPosition:'left',
    drawerType:'front',
    hideStatusBar:true,
    contentComponent:customDrawerComponent
})
const Home = createAppContainer(MyApp);
export default Home