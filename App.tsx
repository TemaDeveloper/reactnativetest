import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [displayedText, setDisplyedText] = useState('Initial Text');

  const handleLogin = () => {
    //console.log('Logging in with username:', username, 'and password:', password);
    setDisplyedText('You are loggining in as: ' + username +'\n with a password: ' + password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>

        <Text style={styles.headerText}>Title</Text>

      </View>

      <View style={styles.innercontainer}>

        <Text style={styles.contentText}>Username:</Text>

        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder = "Name"/>

        <Text style={styles.contentText}>Password</Text>

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Pass"/>

        <TouchableOpacity style={styles.buttoncontent} onPress={handleLogin}>

          <Text style={styles.buttontext}>Login</Text>

        </TouchableOpacity>

        <Text style={styles.contentText}>{displayedText}</Text>
      </View>

      <View style = {styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>

    </SafeAreaView>
  );
}
  export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: "space-between"
  },

  header:{
    flex: 1,
    width: '100%',
    backgroundColor: "skyblue", 
    alignItems: "center",
    padding: 20,
  }, headerText: {
    fontSize: 32, 
    fontWeight: 'bold',
  },
  innercontainer:{
    paddingHorizontal: 16,
    alignContent: "center",
  },
  contentText: {
    fontSize: 16,
    color: 'red',
  },

  footer: {
    flex: 1,
    width: '100%',
    padding: 20,
    backgroundColor: "yellow", 
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
  },
  buttoncontent: {
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 25,
    backgroundColor: '#fb5b5a',
  },
  buttontext: {
    color: 'white',
    alignSelf: "center",
    fontSize: 20,
  },

});