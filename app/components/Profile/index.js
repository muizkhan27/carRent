import React, { Component } from 'react'
import {
        View,Text,Button,Image,StyleSheet
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Header,Left,Icon, Right, Container} from 'native-base';
import { SliderBox } from "react-native-image-slider-box"; 
class Profile extends Component{

constructor(props) {
    super(props);
    
    this.state = {
      images: [
       
        require('./car2.jpg'),
        require('./car3.jpg'),
        require('./car4.jpg')
        
                 
      ]
    };
  }

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
            <View style={styles.container}>

              <Header style={{ justifyContent:'flex-start',backgroundColor:'coral'}}>

                  <Left>
                  <Icon  name='menu' onPress={()=>this.props.navigation.openDrawer()}></Icon>  
                    </Left>
                    <Text style={{padding:100,alignSelf:'center',justifyContent:'center'}}> Header</Text>

                </Header>
               
                <View style={{ flex:1}}> 
                <SliderBox
                
                      images={this.state.images}
                      dotColor="coral"
                      inactiveDotColor="beige"
                      resizeMethod={'resize'}
                      sliderBoxHeight={260}
                      resizeMode={'cover'}
                      autoplay
                      circleLoop
                      disableOnPress='true'
                        />
                          <Text style={styles.slidertxt}>CarRent !!</Text>
                           <Text style={{position:'absolute',marginTop:200,fontSize:15,fontStyle:'italic'}}> Finding the best match.. </Text> 
                 </View>
                 <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                   <Text>Profile screen</Text>
                 </View>
                  </View>
              
           
            
         
        );
      }
    }
    const styles = StyleSheet.create({
        icon: {
          width: 24,
          height: 24,
        },
        container:  {
          flex:1,
        
        },
        menu:{
          alignItems:'flex-start',
       
        },
        slidertxt:{
          alignSelf:'flex-start',
           position: 'absolute',
           marginTop:160 ,
           fontFamily:'lucida grande',
           fontSize: 30,
           color:'salmon',
           fontWeight:'bold',
           textShadowColor:'grey'
        }
      });
export default Profile