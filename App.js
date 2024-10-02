import { NavigationContainer } from "@react-navigation/native";
import { MyDrawer } from "./src/navigation/MyDrawer";


export default function App() {
  return (
    <NavigationContainer>

      <MyDrawer />
    </NavigationContainer>
  );
}
