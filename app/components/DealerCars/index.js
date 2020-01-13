import React, { Component } from 'react'

import {
        View,Text,Image,StyleSheet,ScrollView
} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import {Header,Left,Icon, Right, Container} from 'native-base';
import Car from './car.js'

class DealerCars extends Component{

    
    constructor(props){
        super(props)
    }
    static navigationOptions = {
        header:null,
  
          drawerLabel: 'DealerCars',
          drawerIcon: ({ tintColor }) => (
            <Icon name ='car' size={30}></Icon>
          ),
        };

    render() {
        return(
           
                        <View style={{flex:1}}>
                            <View style={{elevation:100}}><Header style={styles.header}>
                  <Left>
                      <View style={{flexDirection:'row'}}>
                      <Icon style={{color:'#a2a2a2'}}  name='menu' onPress={()=>this.props.navigation.openDrawer()}>
                           
                           </Icon>
                           <Text style={{paddingTop:3,paddingLeft:20,fontSize:17,color:'#2c2c2c'}}> My Cars</Text>
                      </View>
                         
                     </Left>
                     
                     <Right>
                        <Icon style={{color:'#a2a2a2',paddingTop:3}} name ='search'onPress={()=>this.SearchBar.show()}></Icon>
                      </Right>
                 </Header></View>
                          <ScrollView style={styles.scroll_style}>
                            <Car style={styles.car_box} imageUri={require('./lx1.jpg')} txt="Mercedez Benz" />  
                            <Car style={styles.car_box} imageUri={require('./lx2.jpg')} txt="BMW 790i"/> 
                            <Car style={styles.car_box} imageUri={require('./lx4.jpg')} txt="Land cruiser"/>  
                            <Car style={styles.car_box} imageUri={require('./lx5.jpg')} txt="Honda s660"/>  
                          </ScrollView>
                          
                          
                        </View>
            
        );
    }
}
const styles=StyleSheet.create({
    header:{
        justifyContent:'flex-start',
        backgroundColor:'#ffffff',
    },
    scroll_style:{
        backgroundColor:'white',
        
    },
    car_box:{
        
    }
})


export default DealerCars