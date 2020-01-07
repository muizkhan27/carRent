import React, { Component } from 'react'
import {
        View,
        Text,
        Image,ScrollView
} from 'react-native';
import CarsList from '@components/Booking/CarsList.js';

class Scheduled extends Component{

    
    constructor(props){
        super(props)
    }
    

    render() {
        return(
           
                        <View style={{flex:1}}>
                          <ScrollView>
                            <CarsList imageUri={require('./lx1.jpg')} txt="Mercedez Benz" dealer="Muiz khan"/>  
                            <CarsList imageUri={require('./lx2.jpg')} txt="BMW 790i"dealer="Ahmad khan"/> 
                            <CarsList imageUri={require('./lx4.jpg')} txt="Land cruiser"dealer="Chaudhry Autos"/>  
                            <CarsList imageUri={require('./lx5.jpg')} txt="Honda s660"dealer="Pak Autos"/>  

                          
                          </ScrollView>
                          
                          
                        </View>
            
        );
    }
}

export default Scheduled