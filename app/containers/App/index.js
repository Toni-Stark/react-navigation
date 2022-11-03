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
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// Screens
import HelpScreen from '../HelpScreen';
import Welcome from '../Welcome';
import Icons from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'react-native';
import { Home } from '../Home';
import Toast from 'react-native-toast-message';
import { User } from '../User';
import { ShareView } from '../ModuleScreen/ShareView';
import { Collection } from '../Collection';
import { BlueTooth } from '../BlueTooth';

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
          let iconColor;
          if (route.name === '数据面板') {
            iconName = 'home';
            iconColor = focused ? '#00D1DE' : '#f2f2f2';
          } else if (route.name === '我的') {
            iconName = 'user';
            iconColor = focused ? '#00D1DE' : '#f2f2f2';
          }
          return <Icons name={iconName} size={25} color={iconColor} />;
        },
      })}>
      <Tab.Screen name="数据面板" component={Home} />
      <Tab.Screen name="我的" component={User} />
    </Tab.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="TabScreen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <HomeStack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Help" component={HelpScreen} />
      <HomeStack.Screen name="ShareView" component={ShareView} />
      <HomeStack.Screen name="Welcome" component={Welcome} />
      <HomeStack.Screen
        name="BlueTooth"
        component={BlueTooth}
        options={{ headerShown: false, navigationOptions: { header: null } }}
      />
    </HomeStack.Navigator>
  );
};

function App() {
  const ref = React.useRef(null);
  return (
    <NavigationContainer ref={ref}>
      <StatusBar backgroundColor="#00D1DE" barStyle={true ? 'light-content' : 'dark-content'} hidden={false} />
      <HomeScreen />
      {/*<DrawerScreen />*/}
      <Toast />
    </NavigationContainer>
  );
}

export default App;
