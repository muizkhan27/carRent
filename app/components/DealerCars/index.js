import React, { Component } from 'react'
import {
        View,
        Text,
        Image,ScrollView
} from 'react-native';
import Car from './car.js'

class DealerCars extends Component{

    
    constructor(props){
        super(props)
    }
    

    render() {
        return(
           
                        <View style={{flex:1}}>
                          <ScrollView>
                            <Car imageUri={require('./lx1.jpg')} txt="Mercedez Benz" />  
                            <Car imageUri={require('./lx2.jpg')} txt="BMW 790i"/> 
                            <Car imageUri={require('./lx4.jpg')} txt="Land cruiser"/>  
                            <Car imageUri={require('./lx5.jpg')} txt="Honda s660"/>  

                          
                          </ScrollView>
                          
                          
                        </View>
            
        );
    }
}

export default DealerCars