import React, { Component } from 'react'
import {
        View,Text,Button,Image,StyleSheet,TouchableWithoutFeedback,Switch
} from 'react-native';
import SearchBar from 'react-native-searchbar';
import {Header,Left,Icon, Right, Container} from 'native-base';
import ToggleSwitch from 'toggle-switch-react-native'
class Settings extends Component{
    constructor() {
      super();
      this.state = {
         switchValue: false,
      }}
    static navigationOptions = {
      header:null,

        drawerLabel: 'Settings',
        drawerIcon: ({ tintColor }) => (
          <Icon name ='settings' size={20}></Icon>
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
                         <Icon  name='menu' onPress={()=>this.props.navigation.openDrawer()}></Icon>
                     </Left>
                     <Text style={{padding:100,alignSelf:'center',fontSize:17,justifyContent:'center'}}> Settings</Text>
                     <Right>
                        <Icon name ='options' onPress={()=>this.searchBar.show()}></Icon>
                      </Right>
                 </Header>

                 <TouchableWithoutFeedback onPress={()=>this.searchBar.hide()} >

                  <View style={{flex:1}}>
                  
                     <View style={{alignItems:'flex-start',flexDirection:'row',borderBottomWidth:0.3,borderBottomColor:'grey'}}>  
                       <Text style={{padding:10,fontSize:20}}>Notifications</Text>
                         <Switch style={{padding:10,marginHorizontal:130}} value={this.state.switchValue} onValueChange={(switchValue)=>this.setState({switchValue})}
                          />
                    </View> 
                    
            </View>
                
                
                 </TouchableWithoutFeedback>

       </View>
                 
           
        );
    }
}
const items = [
  1337,
  'janeway',
  {
    lots: 'of',
    different: {
      types: 0,
      data: false,
      that: {
        can: {
          be: {
            quite: {
              complex: {
                hidden: [ 'gold!' ],
              },
            },
          },
        },
      },
    },
  },
  [ 4, 2, 'tree' ],
];

const styles = StyleSheet.create({
    icon: {
      width: 20,
      height: 20,
    },
    container:{
      flex:1,
    
    },
    search:{ borderWidth:1,borderRadius:10, borderColor:'blue'}
  });

export default Settings