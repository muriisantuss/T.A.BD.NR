import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, SafeAreaView, Pressable, Image } from 'react-native';


export default function App() {
  return (
    <Login></Login>
  );
}

export function Login() {

  return (
    <SafeAreaView style={styles.container}>
      <Image 
      style={styles.logo}
      source={require('./assets/logo.png')}/>
      <Text style={styles.title}>MyApp</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password "
      />
      <Pressable style={styles.button}>
        <Text style={styles.textButton}>Log-in</Text>
      </Pressable>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    height: 100,
    width: 100,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 50,
    backgroundColor: '#546c04',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
  }
});
