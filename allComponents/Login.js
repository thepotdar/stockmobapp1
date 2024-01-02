import React, { useEffect , useState } from 'react';
import { Image, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from './AuthContext';
import { CommonActions } from '@react-navigation/native';


function Login() {

  const { login , isAuthenticated } = useAuth();
  const [username, setUsername] = useState('Admin');

  const [password, setPassword] = useState('Admin@123');

  const navigation = useNavigation();
  

  const handleLogin = () => {
    if (username && password) {
      login();
       navigation.navigate('Stock Market Pulse is here');
    } else {
      alert('Please enter your username and password please.');
    }
  };


 
  
  return (


    <View style={{ flex: 1 }}>
    
    
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
        <Image
    
    source={{ uri: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp' }}
    
    style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
        />
        


      </View>
      <View style={{ flex: 1, paddingHorizontal: 18 }}>
        <TextInput
          style={{ marginBottom: 18, borderWidth: 1, borderColor: '#001', padding: 10 }}
          placeholder="Enter your username"
          value={username}
          onChangeText={(text) => setUsername(text)}

        />
        <TextInput
          style={{ marginBottom: 20, borderWidth: 1, borderColor: '#000', padding: 10 }}
          placeholder=" password"


          //guywehjbdskz
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

export default Login;
