import React, { Component } from 'react'
import {
        View,Text,Button,Image,StyleSheet,TouchableWithoutFeedback,Switch
} from 'react-native';
import SearchBar from 'react-native-searchbar';
import {Header,Left, Right, Container} from 'native-base';
import  Icon  from 'react-native-vector-icons/Feather';
import ToggleSwitch from 'toggle-switch-react-native'
class Settings extends Component{
    constructor() {
      super();
      this.state = {
         switch1Value: false,
         switch2Value: false,
         switch3Value: false,
      }}
    static navigationOptions = {
      header:null,

        drawerLabel: 'Settings',
        drawerIcon: ({ tintColor }) => (
          <Icon name ='settings' size={25}></Icon>
        ),
      };
      
      
    render() {
        return(
       <View style={styles.container}>
         <SearchBar style={styles.search}
          ref={(ref) => this.searchBar = ref}
          placeholder='what are you looking for'
          allDataOnEmptySearch={true}  
          animationDuration={100}
          />
               <Header style={{justifyContent:'flex-start',backgroundColor:'coral'}}>
                  <Left>
                         <Icon  name='menu' size={25} onPress={()=>this.props.navigation.openDrawer()}></Icon>
                     </Left>
                     <Text style={styles.headertxt}> Settings</Text>
                     <Right>
                        <Icon name ='more-vertical' size={25} ></Icon>
                      </Right>
                 </Header>

                 <TouchableWithoutFeedback onPress={()=>this.searchBar.hide()} >

                  <View style={{flex:1}}>
                  <View style={styles.smallView}>  
                       <Text style={{padding:10,fontSize:20}}> Location </Text>
                        <Right><Switch value={this.state.switch1Value} onValueChange={(switch1Value)=>this.setState({switch1Value})}
                          /></Right> 
                      </View> 

                      <View style={styles.smallView}>  
                       <Text style={{padding:10,fontSize:20}}> Profile Public </Text>
                        <Right>
                          <Switch value={this.state.switch3Value} onValueChange={(switch3Value)=>this.setState({switch3Value})}/>
                          </Right> 
                      </View> 

                     <View style={styles.smallView}>  
                       <Text style={{padding:10,fontSize:20}}> Notifications</Text>
                        <Right><Switch value={this.state.switch2Value} onValueChange={(switch2Value)=>this.setState({switch2Value})}
                          /></Right> 
                      </View> 
                      <View style={{alignItems:'flex-start',flexDirection:'row'}}>  
                       <Text style={{padding:10,fontSize:23,fontWeight:'bold'}}> Account Settings</Text>
                       
                      </View> 

                      
                     
                      
                    
            </View>
                
                
                 </TouchableWithoutFeedback>

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
    smallView:{
    alignItems:'flex-start',
    flexDirection:'row',
    borderBottomWidth:0.5,
    borderBottomColor:'grey'
  },
    search:{ borderWidth:1,
      borderRadius:10,
       borderColor:'blue'}
  });

export default Settings