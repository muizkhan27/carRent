import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {Divider} from 'react-native-elements';

export default class CarDetails extends Component {
    static navigationOptions ={
        header:null
    }
  render() {
    return (
            <ScrollView>
        <View style={{flex:1, backgroundColor: 'cyan'}}>
         <View
          style={{
            flex: 2,
            justifyContent: 'flex-start',
            alignItems: 'stretch',
          }}>
          <ImageBackground
            source={require('./lx1.jpg')}
            style={{height: 200}}>
            <Text style={styles.title}> Mercedez Benz</Text>
          </ImageBackground>
        </View>
        <View style={{flex:2,padding:10}}>
          
          <Text style={styles.header}>Dealer Address</Text>
          <Text style={styles.description}>
          
            59B jail Road, Lahore.
          </Text>

        <Text style={styles.header}>Date</Text>
          <Text style={styles.description}> 20-jan-2020</Text>

          <Text style={styles.header}>Time</Text>
          <Text style={styles.description}> 20:00 </Text>
        
          <Text style={styles.header}>Payment Status</Text>
          <Text style={[styles.description,{color:'red'}]}> Pending </Text>
        </View>
          


         



        <View
          style={{
            flex: 1,
            bottom:0,
            justifyContent: 'flex-end',
            backgroundColor: 'white',
          }}>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 50,
              backgroundColor: 'coral',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16}}>Cancel</Text>
          </TouchableOpacity>
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