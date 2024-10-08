import { createStackNavigator } from '@react-navigation/stack';
import * as router from '../screens/routers'


const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={router.Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={router.Home} />
      <Stack.Screen name="NewTask" component={router.NewTask} />
      <Stack.Screen name="Edit" component={router.Edit} />
    </Stack.Navigator>
  )
}