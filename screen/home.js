import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";



export function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>WelcomeHome</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
