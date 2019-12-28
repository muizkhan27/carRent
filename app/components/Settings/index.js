import React, { Component } from 'react'
import {
        View,Text,Button,Image,StyleSheet
} from 'react-native';
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
            <View>
                <Text>What you wanna set</Text>
                
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

export default Settings