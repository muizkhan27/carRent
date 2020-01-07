import React, { Component } from 'react'
import {
        View,Text,Button,Image,StyleSheet,ScrollView,TouchableWithoutFeedback
} from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import {Header,Left,Icon,Right} from 'native-base';
import { SliderBox } from "react-native-image-slider-box"; 
import SearchBar from 'react-native-searchbar';
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
          <Icon name ='home' size={20}></Icon>
        ),
      };
    
      render() {
        return (
          
            <View style={styles.container}>
              
                 <SearchBar style={styles.search}
                    ref={(ref) => this.searchBar = ref}
                    placeholder='what are you looking for'
                    allDataOnEmptySearch={true}
                   
                    onBack={this.doNothin}
                    animationDuration={100}
                           />
              <Header style={{ justifyContent:'flex-start',backgroundColor:'coral'}}>

                  <Left>
                  <Icon  name='menu' onPress={()=>this.props.navigation.openDrawer()}></Icon>  
                    </Left>
                    <Text style={{padding:100,alignSelf:'center',fontSize:17,justifyContent:'center'}}> Home</Text>
                      <Right>
                        <Icon name ='search'onPress={()=>this.searchBar.show()}></Icon>
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
                          <Text style={{position:'absolute',marginHorizontal:10,marginTop:200,fontSize:15}}> Finding the best match.. </Text> 
                 </View>
              
                 <TouchableWithoutFeedback onPress={()=>this.searchBar.hide()} >
                 <View style={{marginTop:10}}>
                        <Text style={{fontSize:25,fontWeight:'bold',fontFamily:'lucida grande',paddingHorizontal:10}}>Most Popular Cars</Text>

                        <View style={{height:160}}>
                          <ScrollView horizontal={true}
                              showsHorizontalScrollIndicator={false}>
                            <Popular imageUri={require('./lx1.jpg')} txt="Mercedez Benz"/>  
                            <Popular imageUri={require('./lx2.jpg')} txt="BMW su01"/> 
                            <Popular imageUri={require('./lx4.jpg')} txt="Land cruiser"/>  
                            <Popular imageUri={require('./lx5.jpg')} txt="Honda s660"/>  

                          
                          </ScrollView>
                          
                          
                        </View>
                        <Text style={{marginTop:10,fontSize:25,fontWeight:'bold',fontFamily:'lucida grande',paddingHorizontal:10}}>Most Used Cars</Text>

                            <View style={{height:160}}>
                              <ScrollView horizontal={true}
                                  showsHorizontalScrollIndicator={false}>
                                <Popular imageUri={require('./lx4.jpg')} txt="Land cruiser"/>  
                                <Popular imageUri={require('./lx5.jpg')} txt="Honda s660"/>  
                                <Popular imageUri={require('./lx2.jpg')} txt="BMW Su01"/> 
                                <Popular imageUri={require('./lx1.jpg')} txt="Mercedez Benz"/>  
                                <Popular imageUri={require('./lx3.jpg')} txt="BMW Su09"/>  

                              
                              </ScrollView>
                              
                              
                            </View>

                    



                 </View>
                 
                </TouchableWithoutFeedback>
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
           marginTop:100,
           marginHorizontal:10,
           height:150,
           width:150,
           resizeMode:'contain'         
        }
      });
export default Home