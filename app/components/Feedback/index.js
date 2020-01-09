import React, { Component } from 'react'
import {
        View,Text,Image,StyleSheet,Slider,Picker,TextInput,ScrollView,Button
} from 'react-native';
import {Header,Left, Right, Container} from 'native-base';
import  Icon  from 'react-native-vector-icons/Feather';

class Feedback extends Component{
  state = {type: ''}
  updateType = (type) => {
     this.setState({ type: type })
  }
    constructor(props){
        super(props)
    }
    static navigationOptions = {
        header:null,
        
          drawerLabel: 'Feedback',
          drawerIcon: ({ tintColor }) => (
        <Icon name ='clipboard' size={25}></Icon>
          ),
        };

    render() {
        return(
          <ScrollView>
            <View>
                <Header style={{justifyContent:'flex-start',backgroundColor:'coral'}}>
                  <Left>
                         <Icon  name='menu' size={25} onPress={()=>this.props.navigation.openDrawer()}></Icon>
                     </Left>
                     <Text style={styles.headertxt}> Feedback</Text>
                     
                 </Header>
                <Text style={{fontSize:20,color:'maroon',padding:10}} >Your Feedback is important to us</Text>
                <Text style={{fontSize:15,color:'black',padding:10}} >Your overall rating for this app</Text>

              <Slider maximumValue={10} thumbTintColor='coral' style={{height:30,}} minimumValue={1} minimumTrackTintColor='red' step={1} maximumTrackTintColor='grey' ></Slider>
              
              <Text style={{fontSize:15,color:'black',padding:10}} >Select Category For Feedback</Text>

              <Picker selectedValue = {this.state.type} onValueChange = {this.updateType}>
               <Picker.Item label = "Complaint" value = "complaint" />
               <Picker.Item label = "Suggestion" value = "suggestion" />
               <Picker.Item label = "Complimant" value = "complimant" />
            </Picker>

            <Text style={{fontSize:15,color:'black',padding:10}} >Write message</Text>
            <TextInput style={styles.inputs} placeholder='Type here...' multiline={true}></TextInput>

            <View style={styles.btnprop}>
                <Button  title="Submit" color='coral' ></Button>
                </View>
            </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    icon: {
      width: 20,
      height: 20,
    },
    container:{
      flex:1,
    
    },
    headertxt:{
      padding:100,
      alignSelf:'center',
      fontSize:18,
      justifyContent:'center'
  },
  inputs:{
    fontSize:18,
    fontWeight:'bold',
    padding:10,
    maxHeight:200,
    textAlign:'left',
    borderStyle:'solid',
    borderWidth:0.5,
    borderRadius:10,
    borderColor:'red'
 },
 btnprop:{
       
        alignSelf:'center',
        marginTop:10,
        width:200,
        height:70
  
}

})

export default Feedback
