import React, { Component } from 'react'
import {
        View,
        Text,
        Image,ScrollView,TouchableOpacity
} from 'react-native';
import {createStackNavigator}  from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CarsList from '@components/Booking/CarsList.js';
import CarDetails from '@components/Booking/CarDetails.js';

class Scheduled extends Component{

  static navigationOptions ={
    header:null
}
    constructor(props){
        super(props)
    }
    

    render() {
        return(
           
                        <View style={{flex:1}}>
                          <ScrollView>
                            
                           <TouchableOpacity activeOpacity={0.8} onPress={()=>this.props.navigation.navigate('details')}>
                             
                           <CarsList imageUri={require('./lx1.jpg')} txt="Mercedez Benz" dealer="Bari Motors" date='20-jan-2020' time='20:00'/> 
                             </TouchableOpacity>  
                            <CarsList imageUri={require('./lx2.jpg')} txt="BMW 790i"dealer="Ahmad Autos"date='10-feb-2020' time='16:00'/> 
                            <CarsList imageUri={require('./lx5.jpg')} txt="Honda s660"dealer="Pak Autos"date='25-feb-2020' time='22:00'/>  
                            <CarsList imageUri={require('./lx4.jpg')} txt="Land cruiser"dealer="Chaudhry Autos"date='22-feb-2020'time='18:00'/>  

                          
                          </ScrollView>
                          
                                                 
                        </View>
            
        );
    }
};

export default createStackNavigator({
  scheduled: {screen: Scheduled},
  details: {screen: CarDetails},
});
