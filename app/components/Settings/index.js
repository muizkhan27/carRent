import React, { Component } from 'react'
import {
        View,Text,Button,Image,StyleSheet
} from 'react-native';
import {Header,Left,Icon, Right, Container} from 'native-base';

class Settings extends Component{

    static navigationOptions = {
      header:null,

        drawerLabel: 'Settings',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('./chat-icon.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        ),
      };

    render() {
        return(
            
       <View style={styles.container}>
               <Header style={{justifyContent:'flex-start',backgroundColor:'coral'}}>
                  <Left>
                         <Icon  name='menu' onPress={()=>this.props.navigation.openDrawer()}>
                           
                         </Icon>
                     </Left>
                     <Text style={{padding:100,alignSelf:'center',justifyContent:'center'}}> Header</Text>

                 </Header>


                 <View style={{flex:1,justifyContent:'center',alignSelf:'center'}}>
                   <Text>Setting screen</Text>
                 </View>
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
    
    }
  });

export default Settings