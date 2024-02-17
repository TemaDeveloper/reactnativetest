import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import ListItem from './components/ListItem';


const NonCocktailsAlcForm = (cocktailsData) => {
const renderItem = ({item}) => (
  <ListItem
    type = {item.cocktails[0].main}
    strDrink = {item.strDrink}
  />
)

const DATA = [
  {
    strDrink: "Cocktail 1", 
    type: "Nonalchoholic"
  },
  {
    strDrink: "Cocktail 2", 
    type: "Nonalchoholic"
  },
  {
    strDrink: "Cocktail 1", 
    type: "Nonalchoholic"
  }
];

return (

    <View style = {styles.container}>

        <FlatList 
          data = {DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.strDrink}/>
    
    </View>

);

}

export default NonCocktailsAlcForm;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    contentText: {
        fontSize: 16,
        color: 'red',
        marginTop: 20
      },
});

