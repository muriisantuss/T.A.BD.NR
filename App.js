import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as screens from "./screen/screens";
import { NavigationContainer } from "@react-navigation/native";
import { MyStack } from "./navigation/MyStack";
import { MyDrawer } from "./navigation/MyDrawer";



export default function App() {
  return (
    <NavigationContainer>

      <MyDrawer />
    </NavigationContainer>
  );
}
