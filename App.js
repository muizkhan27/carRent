/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


  import {createAppContainer } from 'react-navigation';
  import {createStackNavigator} from 'react-navigation-stack';
  import Login from '@components/Login'
  import Dashboard from '@components/Dashboard'
  import Splash from '@components/Splash';
  import Signup from '@components/Signup'
  import DealerDashboard from '@components/DealerDashboard'
  
  const MainNavigator = createStackNavigator({
    Splash:Splash,
    login: Login,
    signup:Signup,
    dashboard:Dashboard,
    dealerDashboard:DealerDashboard
  
  });
  const App = createAppContainer(MainNavigator);
  

export default App;

