import React, { Component } from 'react'
import {
        View,Text,Button,Image,StyleSheet
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Header,Left,Icon} from 'native-base';
class Profile extends Component{

    static navigationOptions = {
        
        header:null,
        drawerLabel: 'Profile',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('./chat-icon.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        ),
      };
    
      render() {
        return (
            <View>
                 <Header>
                     <Left>
                         <Icon name='menu'></Icon>
                     </Left>

                 </Header>
            </View>
         
        );
      }
    }
    const styles = StyleSheet.create({
        icon: {
          width: 24,
          height: 24,
        },
      });
export default Profile