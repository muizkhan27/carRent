import React, { Component } from 'react'
import {
        View,Text,Button,Image,StyleSheet,ScrollView,TouchableWithoutFeedback
} from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import {Header,Left,Icon,Right} from 'native-base';
import { SliderBox } from "react-native-image-slider-box"; 
import SearchBar from 'react-native-searchbar';
class Statistics extends Component{

    constructor(props){
        super(props)
    }
    static navigationOptions = {
        header:null,
  
          drawerLabel: 'Statistics',
          drawerIcon: ({ tintColor }) => (
            <Icon name ='edit' size={30}></Icon>
          ),
        };

    render() {
        return(
            <View>
                <Header style={{justifyContent:'flex-start',backgroundColor:'coral'}}>
                  <Left>
                         <Icon  name='menu' size={30} onPress={()=>this.props.navigation.openDrawer()}></Icon>
                     </Left>
                     <Text style={{padding:100,alignSelf:'center',fontSize:17,justifyContent:'center'}}> Statistics</Text>
                     
                 </Header>
                <Text>Statistics</Text>
            </View>
        );
    }
}

export default Statistics