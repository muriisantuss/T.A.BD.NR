import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../screen/home";
import { Login } from "../screen/login";

const Drawer = createDrawerNavigator()

export function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  )
}