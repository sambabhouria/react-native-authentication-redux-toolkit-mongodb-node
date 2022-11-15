/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserLoginScreen from './src/app/screen/auth/UserLoginScreen';
import ShopTab from './src/app/screen/shop/ShopTab';
import RegistrationScreen from './src/app/screen/auth/RegistrationScreen';
import SendPasswordResetEmailScreen from './src/app/screen/auth/SendPasswordResetEmailScreen';
import UserPanelTab from './src/app/screen/UserPanelTab';
import {store} from './src/app/store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: 'purple'},
            headerTintColor: 'white',
          }}>
          <Stack.Screen
            name="ShopTab"
            component={ShopTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UserLogin"
            component={UserLoginScreen}
            options={{title: 'User Login'}}
          />
          <Stack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{title: 'Registration', headerBackVisible: false}}
          />
          <Stack.Screen
            name="SendPasswordResetEmail"
            component={SendPasswordResetEmailScreen}
            options={{title: 'Forgot Password'}}
          />
          <Stack.Screen
            name="UserPanelTab"
            component={UserPanelTab}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
