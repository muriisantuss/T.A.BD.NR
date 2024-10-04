import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../services/firebaseConfig"

import { StyleSheet, Text, TextInput, SafeAreaView, Pressable, Image, Alert } from 'react-native';


export function Login({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState()

  const hangleSignIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        Alert.alert('Login successful')
        navigation.navigate('Home')
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)
        Alert.alert(error.message);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./../assets/logo.png')} />
      <Text style={styles.title}>MyApp</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your E-mail"
        onChangeText={(val) => {
          setEmail(val)
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password "
        secureTextEntry={true}
        onChangeText={(val) => {
          setPassword(val)
        }}
      />
      <Pressable onPress={hangleSignIn} style={styles.button}>
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
  logo: {
    height: 100,
    width: 100,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 }
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
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 }

  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
  }
});
