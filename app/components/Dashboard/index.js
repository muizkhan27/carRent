import React, { Component } from 'react'
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Profile from '@components/Profile'
import Settings from '@components/Settings'
import { View, Image } from 'react-native';
import { gestureHandlerRootHOC,ScrollView } from 'react-native-gesture-handler';


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
        <View Style={{height:200}}>
            <Image  source={require('./logo1.jpg' )} style={{height:120 ,  width:120,borderRadius:60,alignSelf:'center'}}></Image>

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
    drawerType:'slide',
    
    contentOptions:{activeTintColor:'coral'},
    contentComponent:customDrawerComponent
})

const App = createAppContainer(MyApp);
export default Dashboard