import React, { Component } from 'react'
import {
        View,Text,Image
} from 'react-native';
class History extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return(
            <View style={{justifyContent:'center'}}>
                    <Text style={{fontSize:17,justifyContent:'center'}}>History sreen</Text>
            </View>
        );
    }
}

export default History