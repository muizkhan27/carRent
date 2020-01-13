import React, { Component } from 'react'
import {
    TouchableHighlight,View,Image,Text,Button,StyleSheet
} from 'react-native';
import { withTheme } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import MyBookings from '.';
import Booking from './Booking'
class Upcoming extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return(
            <View>
                 <Booking imageUri={require('./user.png')} name='Sohaib Mughal' date='12/01/2020' time='01:23:45' price='RS.21000'>

</Booking>
<Booking imageUri={require('./user.png')} name='Sohaib Mughal' date='12/01/2020' time='01:23:45' price='RS.21000'>

</Booking>
<Booking imageUri={require('./user.png')} name='Sohaib Mughal' date='12/01/2020' time='01:23:45' price='RS.21000'>

</Booking>
<Booking imageUri={require('./user.png')} name='Sohaib Mughal' date='12/01/2020' time='01:23:45' price='RS.21000'>

</Booking>
            </View>
        );}

}
export default Upcoming