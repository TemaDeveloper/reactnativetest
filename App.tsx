import React from 'react';
import CocktailsAlcForm from './src/contents/CocktailsAlc';
import NonCocktailsAlcForm from './src/contents/NonCocktailsAlc';
import ProfileForm from './src/contents/Profile';
import LoginForm from './src/contents/auth/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { registerRootComponent } from 'expo';

const Tab = createBottomTabNavigator();
const App = () => {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'Alcohole'} component={CocktailsAlcForm} />
        <Tab.Screen name={'Non alcohole'} component={NonCocktailsAlcForm} />
        <Tab.Screen name={'Profile'} component={ProfileForm}/>
        <Tab.Screen name={'Login'} component={LoginForm}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
