import React, { Component } from 'react'
import {
        View,Text,TextInput,Form,Button,ScrollView, Image, ImageBackground
} from 'react-native';
import styles from './styles'
class Signup extends Component{
    
    
    static navigationOptions ={
        header:null
    }
   
    

    render() {
        const {container,headings,inputs,btnprop,backgroundImage}=styles
       
        return(
            
            
            <ImageBackground source={require('./car1.jpg')}  style={backgroundImage}>
               <ScrollView>
            <View style={container} ></View>
                <Text style={headings}>Registration Form</Text>

                <TextInput style={inputs}  placeholder="First name" placeholderTextColor='white'></TextInput>
                <TextInput style={inputs}  placeholder="Last name" placeholderTextColor='white'></TextInput>
                <TextInput style={inputs}  placeholder="Email"  placeholderTextColor='white' ></TextInput>
                <TextInput style={inputs}  placeholder="Password" placeholderTextColor='white'></TextInput>
                <TextInput style={inputs}  placeholder="Confirm password" placeholderTextColor='white'></TextInput>

                <View style={btnprop}>
              
              <Button title="Submit" color='orange'  ></Button> 
         
                </View>
                
            </ScrollView>
            </ImageBackground>
                
         
                

                
           
        );
    }
}

export default Signup