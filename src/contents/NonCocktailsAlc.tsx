import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import ListItem from './components/ListItem';


const NonCocktailsAlcForm = (cocktailsData) => {


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
    strDrink: "Cocktail 3", 
    type: "Nonalchoholic"
  }
];

return (

    <View style = {styles.container}>

        <FlatList 
          data = {DATA}
          renderItem={({item}) => <Item title={item.strDrink} />}
          keyExtractor={(item) => item.strDrink}/>
    
    </View>

);

}


type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={{fontSize: 20}}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    contentText: {
        fontSize: 16,
        color: 'red',
        marginTop: 20
      },
    item: {
      justifyContent: 'center',
      backgroundColor: 'blue',
      margin: 10
    }
});

export default NonCocktailsAlcForm;

