import React, { Component } from 'react'
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Home from '@components/Home'
import Settings from '@components/Settings'
import { View, Image } from 'react-native';
import { gestureHandlerRootHOC,ScrollView } from 'react-native-gesture-handler';
import { Text } from 'native-base';


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
            <Image  source={require('./logo1.jpg' )} style={{height:100 ,width:100,borderRadius:20,borderColor:'orange',alignItems:'center',justifyContent:'center'}}></Image>
            <Text>Profile name</Text>
        </View> 
        <ScrollView style={{borderWidth:0.5,borderColor:'orange'}}>
            <DrawerItems {...props}></DrawerItems>
        </ScrollView>
    </SafeAreaView>
)
const MyApp =  createDrawerNavigator({

    home:{
      screen:Home
    },
    settings:{
        screen:Settings
    },
    
}, {
    drawerBackgroundColor:'white',
    drawerPosition:'left',
    drawerType:'slide',
    contentOptions:{activeTintColor:'coral'},
    contentComponent:customDrawerComponent
})

const App = createAppContainer(MyApp);
export default Dashboard