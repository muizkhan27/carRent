import React, { Component } from 'react'
import { createAppContainer, SafeAreaView } from 'react-navigation';
import {StyleSheet} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Home from '@components/Home'
import Settings from '@components/Settings'
import Feedback from '@components/Feedback'
import { View, Image,Text,TouchableHighlight,ImageBackground  } from 'react-native';
import { gestureHandlerRootHOC,ScrollView, } from 'react-native-gesture-handler';
import DealerCars from '@components/DealerCars'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { Row } from 'native-base';
import { Overlay } from 'react-native-elements';



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
        <View style= {styles.drawer_1}>
            <View style={styles.user_info}>
                <Image source={require('./user.png')} style={styles.user_img} />
                <View style={styles.user_info_text}>
                    <Text style={styles.user_name}>Sohaib Mughal</Text>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#f4f4f4'}}>4.5</Text>
                    <Icon style={{color:'#ffde00',marginBottom:4}} name='star' size={20}></Icon>
                    </View>
                </View>
            </View>
            
        </View> 
         <View >
           <DrawerItems {...props}></DrawerItems>
           <View
                    style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: 0.5
                    }}/>
        
             
         </View>
          
         <TouchableHighlight style={{position:"absolute",bottom:0}}>
        <View style={{padding:10,marginHorizontal:10,flexDirection:'row'}}>
               <Icon name='mail' size={30}></Icon>
                <Text style={{marginHorizontal:10,paddingTop:5,color:'#424242'}}>Contact Us</Text>
            </View> 
        </TouchableHighlight>
       
            
            
    </SafeAreaView>
)
const MyApp =  createDrawerNavigator({

    home:{
      screen:Home
    },
    dealerCars:{
        screen:DealerCars
    },
    settings:{
        screen:Settings
    },
    feedback:{
        screen:Feedback,
       
    }
    
    
}, {
    drawerBackgroundColor:'#fffcfc',
    drawerPosition:'left',
    drawerType:'slide',
    contentOptions:{activeTintColor:'#00b4ff'},
    contentComponent:customDrawerComponent
})
const styles=StyleSheet.create({
    drawer_1:{
        height:160,
        backgroundColor:'#15baff'
    },
    user_info_text:{

        flex:2,
        paddingTop:40,
        paddingLeft:10,
    },
    user_info:{
        paddingTop:50,
        flexDirection:'row',
        paddingLeft:10,
        shadowColor:'#e6e6e6',
    },
    user_img:{
        flex:1,
        height:90,
        width:90,
        borderRadius:45,

        
    },
    user_name:{
        color:'white',
        fontSize:19,
        letterSpacing:1
    }
    

});
const App = createAppContainer(MyApp);

export default Dashboard