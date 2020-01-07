import React, { Component } from 'react'
import {
        View,Text,Image
} from 'react-native';
import {Header,Left, Right, Container} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'
class Feedback extends Component{

    constructor(props){
        super(props)
    }
    static navigationOptions = {
        header:null,
  
          drawerLabel: 'Feedback',
          drawerIcon: ({ tintColor }) => (
            <Icon name ='feedback' size={30}></Icon>
          ),
        };

    render() {
        return(
            <View>
                <Header style={{justifyContent:'flex-start',backgroundColor:'coral'}}>
                  <Left>
                         <Icon  name='menu' size={30} onPress={()=>this.props.navigation.openDrawer()}></Icon>
                     </Left>
                     <Text style={{padding:100,alignSelf:'center',fontSize:17,justifyContent:'center'}}> Feedback</Text>
                     
                 </Header>
                <Text>Feedback</Text>
            </View>
        );
    }
}

export default Feedback