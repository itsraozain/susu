import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';

const Navigator = createStackNavigator(
  {
    signin: SignIn,
    signup: SignUp,
  },
  {
    initialRouteName: 'signup',
    headerMode: 'none',
  },
);
const App = createAppContainer(Navigator);

export default App;
