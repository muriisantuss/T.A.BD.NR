import { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Text, TextInput, Pressable, Alert } from 'react-native';
import { getFirestore, doc, updateDoc } from "firebase/firestore";

export function Edit({ navigation, route }) {
  const { task, onGoBack } = route.params || {};
  const db = getFirestore();
  const [name, setUptadeName] = useState(task.name);
  const [date, setUptadeDate] = useState(task.dateTask);

  const handleSave = async () => {
    try {
      await updateDoc(doc(db, "appTask", task.id), { name, dateTask: date });
      if (onGoBack) {
        onGoBack();
      }
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert("Erro", "Error when updating the task: " + error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Update Task!!</Text>
      <TextInput
        style={styles.input}
        placeholder="Task name: "
        onChangeText={setUptadeName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Deadline for completion: "
        onChangeText={setUptadeDate}
        value={date}
      />
      <Pressable onPress={handleSave} style={styles.button}>
        <Text style={styles.textButton}>Save</Text>
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
