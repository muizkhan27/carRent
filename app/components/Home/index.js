import React, { Component } from 'react'
import {
        View,Text,Button,Image,StyleSheet,ScrollView
} from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import {Header,Left,Icon, Right, Container} from 'native-base';
import { SliderBox } from "react-native-image-slider-box"; 
import Popular from '@components/Home/popular.js'
class Home extends Component{

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
        drawerLabel: 'Home',
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
                    <Text style={{padding:100,alignSelf:'center',justifyContent:'center'}}> Home</Text>
                      <Right>
                        <Icon name ='search'></Icon>
                      </Right>
                </Header>
          
                <View style={{ flex:2}}>    
                <SliderBox
                
                      images={this.state.images}
                      dotColor="coral"
                      inactiveDotColor="beige"
                      resizeMethod={'resize'}
                      sliderBoxHeight={250}
                      resizeMode={'cover'}
                      autoplay
                      circleLoop
                      disableOnPress='true'
                      TouchableOpacity='false'
                        />
                          <Text style={styles.slidertxt}>CarRent !!</Text>
                          <Text style={{position:'absolute',marginTop:210,fontSize:15}}> Finding the best match.. </Text> 
                 </View>
                 <ScrollView scrollEventThrottle={16}>
                 <View style={{flex:1,backgroundColor:'white'}}>
                        <Text style={{fontSize:25,fontWeight:'bold',fontFamily:'lucida grande',paddingHorizontal:10}}>Most Popular Cars</Text>

                        <View style={{height:160,backgroundColor:'whitesmoke'}}>
                          <ScrollView horizontal={true}
                              showsHorizontalScrollIndicator={false}>
                            <Popular imageUri={require('./lx1.jpg')} txt="BMW su01"/>  
                            <Popular imageUri={require('./lx2.jpg')} txt="Mercedez bens"/> 
                            <Popular imageUri={require('./lx4.jpg')} txt="Land cruiser"/>  
                            <Popular imageUri={require('./lx5.jpg')} txt="Honda s660"/>  

                          
                          </ScrollView>
                        </View>




                 </View>
                 </ScrollView>
                   
                 
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
           marginTop:170 ,
           fontFamily:'lucida grande',
           fontSize: 30,
           color:'whitesmoke',
           fontWeight:'bold',
           textShadowColor:'grey'
        }
      });
export default Home