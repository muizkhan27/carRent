import React, { Component } from 'react'
import {
        View,Text,TextInput,Button, Alert,Image
} from 'react-native';
import styles from './styles'

class Login extends Component{

    state={username:"", password: ""}
    static navigationOptions ={
        header:null
        
        
    }
    checkLogin() {
        const {username,password}=this.state
        if(username=="admin" && password=="admin")
        {
            this.props.navigation.navigate('dashboard')
        }
        else if( username=="dealer" && password=="dealer")
        {
            this.props.navigation.navigate('dealerDashboard')
        }
        else{
           Alert.alert('Error !! Credentials dont match')
        }
    }
   
    render() {
        const {headings, inputs,container,logos,btnprop}=styles
        return(
            <View style={container}>
                <Image source={require('./logo1.jpg')} style={logos} ></Image>
                
                <TextInput style={inputs} placeholder="Username" onChangeText={text=>this.setState({username:text})} ></TextInput>
                <TextInput style={inputs}  placeholder="Password" secureTextEntry={true}  onChangeText={text=>this.setState({password:text})}></TextInput>
                <View>
                <Button  title="Login"   onPress={()=>this.checkLogin()}></Button>
                </View>
               <View style={btnprop}>
              
                    <Button title="signup" color='orange' onPress={()=>this.props.navigation.navigate('signup')} ></Button> 
               
               </View>
               
            </View>
        );
    }
}


export default Login