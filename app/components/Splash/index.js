import React, { Component } from 'react'
import {
        View, Text,Image,st
} from 'react-native';
import styles from './styles';
class Splash extends Component{
    
    componentDidMount () {
        
        setTimeout (() => {
            this.props.navigation.navigate('login')
        }, 3000); 
    }
    static navigationOptions ={
        header:null
    }

    render() {
        
        const {container,logos,headings}=styles
        
        return(
            <View style={container}>
            <Image source={require('./logo1.jpg')} style={logos} ></Image>
            <Text style={headings} >CarRent !!</Text>
            </View>
        );
    }
}

export default Splash