import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './allComponents/DrawerNavigator';
import store from './reduxComponents/store';
import { AuthProvider } from './allComponents/AuthContext';
//giuhfdvjknscx
const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
};

export default App;
