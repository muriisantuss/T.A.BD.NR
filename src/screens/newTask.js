import { StyleSheet, SafeAreaView, View, Text, TextInput, Pressable } from 'react-native';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';

export function NewTask({ navigation, route }) {
  const [nameTask, setNameTask] = useState();
  const [dateTask, setDateTask] = useState();

  const db = getFirestore();

  const handleAddTask = async () => {
    if (nameTask.trim() == '' || dateTask.trim() == '') {
      alert("Error", "All fields are required!")
    }
    try {
      await addDoc(collection(db, "appTask"), { name: nameTask, dateTask })
      alert("Success", "task added successfully")
      navigation.navigate('Home')
      route.params?.onGoBack();
    } catch (error) {
      Alert.alert("Error", "Failed to add new task " + error.message);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Add New Task!!</Text>
      <TextInput
        style={styles.input}
        placeholder="Task name: "
        onChangeText={setNameTask}
      />
      <TextInput
        style={styles.input}
        placeholder="Deadline for completion: "
        onChangeText={setDateTask}
      />

      <Pressable onPress={handleAddTask} style={styles.button}>
        <Text style={styles.textButton}>Add</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text style={styles.cancel}>Cancel</Text>
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
  title: {
    width: '45%',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
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
  button: {
    borderRadius: 8,
    backgroundColor: '#546c04',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 }

  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
  },
  cancel: {
    fontSize: 12,
    textDecorationLine: 'underline',
    color: '#FF6347',
    fontWeight: 'bold'
  }
});