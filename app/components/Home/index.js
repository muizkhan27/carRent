import React, { Component } from 'react'
import {
        View,Text,Button,TouchableOpacity,Image,StyleSheet,ScrollView,TouchableWithoutFeedback,Alert
} from 'react-native';
import {  TextInput } from 'react-native-gesture-handler';
import {Header,Left,Right} from 'native-base';
import  Icon  from 'react-native-vector-icons/Feather';

import { SliderBox } from "react-native-image-slider-box"; 
import SearchBar from 'react-native-searchbar';
import Popular from '@components/Home/popular.js'
class Home extends Component{

constructor(props) {
    super(props);
    
    this.state = {
      images: [
       
       
        require('./car5.jpg'),
        require('./car2.jpg'),
        require('./car3.jpg'),
        require('./car4.jpg'),
        require('./car6.jpg'),
      ]
    };
  }
  SampleFunction=()=>{
 
    Alert.alert("Floating Button Clicked");

}
    static navigationOptions = {
        
        header:null,
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Icon name ='home' size={25}></Icon>
        ),
      };
    
      render() {
        return (
          
            <View style={styles.container}>
              
                 <SearchBar style={styles.search}
                    ref={(ref) => this.searchBar = ref}
                    placeholder='Search cars'
                    
                    allDataOnEmptySearch={true}
                   
                    onBack={this.doNothin}
                    animationDuration={100}
                           />
              <Header style={{ justifyContent:'flex-start',backgroundColor:'coral'}}>

                  <Left>
                  <Icon  name='menu' size={25} onPress={()=>this.props.navigation.openDrawer()}></Icon>  
                    </Left>
                    <Text style={styles.headertxt}> Home</Text>
                      <Right>
                        <Icon name ='search' size={25} onPress={()=>this.searchBar.show()}></Icon>
                      </Right>
                </Header>
                
                <ScrollView keyboardDismissMode={"on-drag"} showsVerticalScrollIndicator={false} >

                <View >    
                <SliderBox
                
                      images={this.state.images}
                      dotColor="coral"
                      inactiveDotColor="beige"
                      sliderBoxHeight={250}
                      resizeMode={'cover'}
                      resizeMethod={'resize'}
                      autoplay
                      circleLoop
                      disableOnPress='true'
                      TouchableOpacity='false'
                        />
                          
                          <Image style={styles.slidertxt} source={require('./LOGO-1.png')}></Image>
                          <Text style={styles.slidersmall}> Finding the best match.. </Text> 
                 </View>
                
                 <TouchableWithoutFeedback onPress={()=>this.searchBar.hide()} >
                 <View style={{marginTop:10}}>
                        
                        <View style={{flexDirection:'row'}}>
                        
                        <Text style={{fontSize:25,fontWeight:'bold',fontFamily:'lucida grande',paddingHorizontal:10}}>Most Popular Cars</Text>
                          <Right>
                          
                          <Text style={{marginEnd:5,color:'coral'}}> See all</Text>

                          </Right>

                        </View>
                        

                        <View style={{height:160}}>
                          <ScrollView horizontal={true}
                              showsHorizontalScrollIndicator={false}>
                            <Popular imageUri={require('./lx1.jpg')} txt="Mercedez "/>  
                            <Popular imageUri={require('./lx2.jpg')} txt="BMW su01"/> 
                            <Popular imageUri={require('./lx4.jpg')} txt="Land cruiser"/>  
                            <Popular imageUri={require('./lx5.jpg')} txt="Honda s660"/>  
                            <Popular imageUri={require('./car5.jpg')} txt="Audi r6"/>  


                          
                          </ScrollView>
                          
                          
                        </View>
                       
                        <View style={{marginTop:10,flexDirection:'row'}}>
                        <Text style={{fontSize:25,fontWeight:'bold',fontFamily:'lucida grande',paddingHorizontal:10}}>Most Used Cars</Text>
                        <Right>
                          
                          <Text style={{marginEnd:5,color:'coral'}}> See all</Text>

                          </Right>
                        </View>
                        
                            <View style={{height:160}}>
                              <ScrollView horizontal={true}
                                  showsHorizontalScrollIndicator={false}>
                                <Popular imageUri={require('./lx4.jpg')} txt="Land cruiser"/>  
                                <Popular imageUri={require('./lx5.jpg')} txt="Honda s660"/>  
                                <Popular imageUri={require('./lx2.jpg')} txt="BMW Su01"/> 
                                <Popular imageUri={require('./car6.jpg')} txt="Audi r8"/>  
                                <Popular imageUri={require('./lx1.jpg')} txt="Mercedez "/>  

                              
                              </ScrollView>
                              
                              
                            </View>

                             
 





                 </View>
                 
                </TouchableWithoutFeedback>
                 </ScrollView>
                   
                 <TouchableOpacity activeOpacity={0.5} onPress={this.SampleFunction} style={styles.TouchableOpacityStyle} >

            <Icon name='plus'  size={45} 

                          style={styles.FloatingButtonStyle} />

</TouchableOpacity>  
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
          
           position: 'absolute',
           top:25,
           left:10,
           height:50,
           width:150,
           resizeMode:'contain'         
        },
        slidersmall:{
          position:'absolute',
          top:70,
          left:10,
          backgroundColor:'grey',
          fontSize:15
        },
        headertxt:{padding:100,
          alignSelf:'center',
          fontSize:17,
          justifyContent:'center'},
       
        TouchableOpacityStyle:{
       
          position: 'absolute',
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          right: 30,
          bottom: 30,
        },
       
        FloatingButtonStyle: {
          height:45,
          width:45,
          backgroundColor:'coral',
          borderRadius:23,
          alignSelf:'center'
        }
      });
export default Home