import React, { Component } from 'react'
import {
        View, Text,Image, ImageBackground
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
            <ImageBackground source={require('./logo1.jpg')} style={{height:200,width:200,alignSelf:'center',justifyContent:'center'}}>
                    
                    <Image source={require('./LOGO-1.png')} style={{marginTop:150,height:200,width:200,resizeMode:'contain'}}></Image>

               
            </ImageBackground>

                </View>
        );
    }
}

export default Splash