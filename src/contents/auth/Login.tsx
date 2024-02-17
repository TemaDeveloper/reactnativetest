import React from 'react';
import {View, Button, SafeAreaView} from 'react-native';
import Auth0 from 'react-native-auth0';
import auth0Credentials from './auth0-credentials';

const auth0 = new Auth0(auth0Credentials);

const App = () => {
  const login = () => {
    auth0.webAuth
      .authorize({scope: 'openid profile email'})
      .then(credentials => {
        console.log(credentials);
        // Successfully authenticated
        // Store the token or do something with the user profile
      })
      .catch(error => console.log(error));
  };

  return (
    <SafeAreaView>
      <Button title="Log In" onPress={login} />
    </SafeAreaView>
  );
};

export default App;