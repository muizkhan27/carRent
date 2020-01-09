import React, { Component } from 'react'
import {
        View,Text,Image,StyleSheet
} from 'react-native';
import {Header,Left, Right, Container} from 'native-base';
import  Icon  from 'react-native-vector-icons/Feather';

class Feedback extends Component{

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
            <View>
                <Header style={{justifyContent:'flex-start',backgroundColor:'coral'}}>
                  <Left>
                         <Icon  name='menu' size={25} onPress={()=>this.props.navigation.openDrawer()}></Icon>
                     </Left>
                     <Text style={styles.headertxt}> Feedback</Text>
                     
                 </Header>
                <Text style={{fontSize:20,color:'maroon',padding:10}} >Your Feedback is important to us</Text>


            </View>
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

})

export default Feedback
