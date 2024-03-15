import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './screens/Home';
import Settings from './screens/Settings';
import MainAppbar from './components/MainAppbar';
import { ThemeContext } from './context/ThemeContext';
import { StatusBar, StyleSheet } from 'react-native';
import {AppRegistry} from 'react-native';
import ThemeProvider from './context/ThemeProvider';





export default function App() {
    const Stack = createStackNavigator();

  return (
    <PaperProvider>
      <ThemeProvider>
        <NavigationContainer>
        <StatusBar backgroundColor="#666" barStyle="light-content" />
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{header: (props) => 
          <MainAppbar {...props} backgroundColor="#666" icon="cog" color="#fff"/>,
          }}
          >
          <Stack.Screen name="Home">
            {() =>
            <Home />
            }
            </Stack.Screen>
          <Stack.Screen name="Settings" component={Settings}/>
        </Stack.Navigator>
      </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: '#fff' ,
    },
});

AppRegistry.registerComponent('teema', () => App);