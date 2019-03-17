import React, { Component } from 'react';
import {   
  Button, 
  Text, 
  View 
} from 'react-native';



export default class HelloWorldApp extends Component {

  async btn(){
    
    this.props.navigation.navigate('Details');
    console.warn("------------Go To Home Page from Login Page-------------");
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Button
            onPress={ () => this.btn() }
  
            title="Go to details"
          />

          <Text>Home</Text>
      </View>
    );
  }
}