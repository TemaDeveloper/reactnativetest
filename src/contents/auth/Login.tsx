import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import Auth0 from 'react-native-auth0';
import auth0Credentials from './auth0-credentials';

const auth0 = new Auth0(auth0Credentials);
const [email, onEmailChanged] = React.useState('Email');
const [password, onPasswordChanged] = React.useState('Password');

function LoginForm() {
  function login() {
    auth0.webAuth
      .authorize({scope: 'openid profile email'})
      .then(credentials => {
        console.log(credentials);
      })
      .catch(error => console.log(error));
  };
  return (
    <SafeAreaView>

     

      <Button title="Log In" onPress={login} />

      <Text style={{textAlign: 'center'}}>OR</Text>

      

    </SafeAreaView>
  );
};

export default LoginForm;
