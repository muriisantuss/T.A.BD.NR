import { createDrawerNavigator } from "@react-navigation/drawer";
import * as router from '../screens/routers'


const Drawer = createDrawerNavigator()

export function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Sign Out" component={router.Login} options={{ headerShown: false }} />
      <Drawer.Screen name="Home" component={router.Home} />
      <Drawer.Screen name="NewTask" component={router.NewTask} options={{ headerShown: false }}/>
      <Drawer.Screen name="Edit" component={router.Edit} options={{ headerShown: false }}/>
    </Drawer.Navigator>
  )
}