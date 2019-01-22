/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity} from 'react-native';

export default class sampleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" }
  }

  render() {
    return (
      <View style = {styles.container}>
        <TextInput style = {styles.input}
                   placeholder = "email" 
                   underlineColorAndroid = "green"
                   onChangeText={(email) => this.setState({email})}/>

        <TextInput style = {styles.input} 
                   placeholder = "pass" 
                   secureTextEntry={true} 
                   underlineColorAndroid = "green"
                   onChangeText={(password) => this.setState({password})}/>
        <TouchableOpacity style = {styles.button} onPress={() => this.handleButtonPress()} >
          <Text style = {styles.text}>Submit</Text>
        </TouchableOpacity> 
      </View>
    );
  }

  // user defind methods

  handleButtonPress() {
    console.log("pressed");
    params = {
      email: this.state.email,
      password: this.state.password
    }
    alert('email: ' + this.state.email + ' password: ' + this.state.password)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  text:{
    color: '#ffffff'
  },
  input: {
    width: 250,
    height: 40,
    padding: 10,
    margin : 10,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ffdddd',
    borderRadius: 20 ,
    textAlign: 'center',
  },
  button: {
    width: 250,
    height: 40,
    padding: 10,
    margin : 30,
    backgroundColor: '#ffdddd',
    borderRadius: 20 ,
    alignItems: 'center',
  }
 });