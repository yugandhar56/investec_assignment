
import WelcomeScreen from '../WelcomeScreen';
import VarientScreen from '../VarientButtons';
import PlatFormScreen from '../PlatformScreen';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';


  
  const AppNavigator = createStackNavigator(
    {
      welcomeScreen: WelcomeScreen,
      varientScreen: VarientScreen,
      PlatFormScreen: PlatFormScreen
    },
    
  );

  export default createAppContainer(AppNavigator);