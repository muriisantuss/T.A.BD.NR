import { createStackNavigator } from '@react-navigation/stack';
import { Login } from "../screen/login";
import { Home } from "../screen/home";


const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}