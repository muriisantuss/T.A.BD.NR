import { StyleSheet, SafeAreaView, View, Text, TextInput, Pressable } from 'react-native';

export function NewTask({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Add New Task!!</Text>
      <TextInput
        style={styles.input}
        placeholder="Task name: "
      />
      <TextInput
        style={styles.input}
        placeholder="Deadline for completion: "

      />

      <Pressable onPress={() => navigation.navigate('Home')} style={styles.button}>
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