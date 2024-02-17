import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

const CocktailsAlcForm = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Feather name="sun" size = {50} color = "black" style={{alignSelf: 'center'}}/>
          <Text style={{fontSize: 32, textAlign: 'center'}}>6 Degrees</Text>
        <Text style = {{fontSize: 20, textAlign: 'center'}}>Feels Like: 5</Text>
        <View style= {{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style = {{fontSize: 20}}>Max: 8</Text>
          <Text style = {{fontSize: 20}}> Main: -1</Text>
        </View>

        </View>
        <View style = {{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-start'}}> 
          <Text style={{fontSize: 24}}>It is Sunny{"\n"}It is better to wear T-Shirt</Text>
        </View>
      
    </SafeAreaView>
  );
}
export default CocktailsAlcForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'pink',
    alignContent: 'center',
    justifyContent: "center"
  }

});