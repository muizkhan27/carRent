import React, { Component } from 'react'
import {
        View,Text,Image,ScrollView
} from 'react-native';
import CarsList from '@components/Booking/CarsList.js';
class History extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return(
            
            <View style={{flex:1}}>
            <ScrollView>
              <CarsList imageUri={require('./lx5.jpg')} txt="Honda s660"dealer="Pak Autos"date='25-dec-2020' time='20:00'/>  
              <CarsList imageUri={require('./lx2.jpg')} txt="BMW 790i"dealer="Ahmad Autos"date='10-dec-2020' time='16:00'/> 

            
            </ScrollView>
            
            
          </View>

        );
    }
}

export default History