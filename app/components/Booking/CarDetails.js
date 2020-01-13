import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import {Divider} from 'react-native-elements';

export default class CarDetails extends Component {
  
    static navigationOptions ={
        header:null
    }
    constructor(props){
      super(props)

      this.state={
        carName: this.props.navigation.state.params.carName,
        dealerName:this.props.navigation.state.params.dealerName,
        carImage:this.props.navigation.state.params.carImage,


        dialogVisible:false,
      }
    }
  render() {
   
   return (
           <ScrollView>
        <View style={{flex:1, backgroundColor: 'white'}}>
         <View
          style={{
            flex: 2,
            justifyContent: 'flex-start',
            alignItems: 'stretch',
          }}>
          <ImageBackground
            source={require('./lx1.jpg')}
            
            style={styles.imageStyle}>
           <Text style={styles.title}>{this.state.carName}</Text>
          </ImageBackground>
        </View>
       
        <View style={{flex:1,alignItems:'flex-start'}}>
       
        <View
                    style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth:0.5,
                    width:'100%',
                    padding:5
                    }}>
                      <Text style={styles.header}>Dealer Name</Text>
             
             <Text style={styles.description}> {this.state.dealerName}
          </Text>
                    </View>
          <View
                    style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth:0.5,
                    width:'100%',
                    padding:5
                    }}>
                      <Text style={styles.header}>Dealer Address</Text>
          <Text style={styles.description}> 59B jail Road, Lahore.
          </Text>
                    </View>
           <View
                    style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth:0.5,
                    width:'100%',
                    padding:5
                    }}>
                       <Text style={styles.header}>Date</Text>
          <Text style={styles.description}> 20-jan-2020</Text>
      
                    </View>
          <View
                    style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth:0.5,
                    width:'100%',
                    padding:5
                    }}>
                        <Text style={styles.header}>Time</Text>
          <Text style={styles.description}> 20:00 </Text>
        
                    </View>
            <View
                    style={{
                   
                    width:'100%',
                    padding:5
                    }}>
                      <Text style={styles.header}>Payment Status</Text>
          <Text style={[styles.description,{color:'red'}]}> Pending </Text>
        
                    </View>
        </View>
          




        <View
          style={{
           bottom:0,
            alignItems:'flex-end',
            backgroundColor: 'white',
          }}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({dialogVisible: true})}
            style={{
              width: '100%',
              height: 50,
              backgroundColor: 'coral',
              alignItems: 'center',
              alignSelf:'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16}}>Cancel</Text>
          </TouchableOpacity>
          <ConfirmDialog
                      title="Confirm Cancel"
                      message="Are you sure about that?"
                      visible={this.state.dialogVisible}
                      onTouchOutside={() => this.setState({dialogVisible: false})}
                      positiveButton={{
                          title: "YES",
                          onPress: () => alert("No touched!")
                      }}
                      negativeButton={{
                          title: "NO",
                          onPress: () => this.setState({dialogVisible: false})

                      }}
                    />
        </View>
      </View>
      
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
 imageStyle: {
   height: 200,
   borderRadius:10,
   elevation:8,
   shadowColor:'black',
   shadowOpacity:1,
   },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    left: 10,
  },
  description: {
    left: 10,
  },
  view: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-evenly',
    height: 100,
    alignItems: 'baseline',
    marginTop: 7,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e4e4e4',
    borderStyle: 'solid',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  priceView: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
    marginTop: 7,
    marginHorizontal: 5,
  },
  pricingDescription: {
    fontSize: 18,
    top: 15,
    left: 9,
  },
});