/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// Screens
import HelpScreen from '../HelpScreen';
import Welcome from '../Welcome';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'react-native';
import { Home } from '../Home';
import Toast from 'react-native-toast-message';
import { User } from '../User';
import { ShareView } from '../ModuleScreen/ShareView';
import { Collection } from '../Collection';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#3e2465"
      inactiveColor="#f0edf6"
      barStyle={{ backgroundColor: '#ffffff' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size = 30 }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'forward' : 'forward';
          } else if (route.name === 'User') {
            iconName = focused ? 'heart' : 'add';
          } else if (route.name === 'Collection') {
            iconName = focused ? 'heart' : 'add';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Collection" component={Collection} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="TabScreen">
      <HomeStack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Help" component={HelpScreen} />
      <HomeStack.Screen name="ShareView" component={ShareView} />
      <HomeStack.Screen name="Welcome" component={Welcome} />
    </HomeStack.Navigator>
  );
};

function App() {
  const ref = React.useRef(null);
  return (
    <NavigationContainer ref={ref}>
      <StatusBar backgroundColor="#ffffff" barStyle={false ? 'light-content' : 'dark-content'} hidden={false} />
      <HomeScreen />
      {/*<DrawerScreen />*/}
      <Toast />
    </NavigationContainer>
  );
}

export default App;
