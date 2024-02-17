import React, {useState} from 'react';
import CocktailsAlcForm from './src/contents/CocktailsAlc';
import NonCocktailsAlcForm from './src/contents/NonCocktailsAlc';
import ProfileForm from './src/contents/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ActivityIndicator, View } from 'react-native'; 

const Tab = createBottomTabNavigator();
const App = () => {

  const[loading, setLoading] = useState(true)
  // if(loading){
  //   return(
  //     <View style = {{justifyContent: 'center', flex: 1}}>
  //       <ActivityIndicator size={"large"} color={'blue'}/>
  //     </View>
  //   )
  // }
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'Alcohole'} component={CocktailsAlcForm} />
        <Tab.Screen name={'Non alcohole'} component={NonCocktailsAlcForm} />
        <Tab.Screen name={'Profile'} component={ProfileForm}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;