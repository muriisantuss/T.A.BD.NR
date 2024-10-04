import { collection, getFirestore, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Pressable,
  View,
  ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export function Home({ navigation }) {
  const [newTask, setNewTask] = useState([])
  const db = getFirestore()

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "appTask"))
    const newTaskArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    setNewTask(newTaskArray)
  }

  const goToNewTask = () => {
    navigation.navigate('NewTask', {
      onGoBack: fetchTasks,
    })
  }
  const Item = ({ task }) => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.cardContainer}>
          <Text style={styles.title}>{task.name} </Text>
          <Text style={styles.date}>Deadline: {task.dateTask}</Text>

          <View style={styles.buttonContainer}>
            <Pressable style={[styles.button, { backgroundColor: "#4B53B4" }]}>
              <Text><Icon name="pencil" size={15} color="#fff" /></Text>
            </Pressable>
            <Pressable style={[styles.button, { backgroundColor: "red", marginLeft: 8 }]}>
              <Text><Icon name="trash" size={15} color="#fff" /></Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.footer}>
      <ScrollView style={{ paddingBottom: 60, paddingHorizontal: 16 }}>
        {newTask.map(task => (
          <Item key={task.id} task={task} />
        ))}
      </ScrollView>
      <Pressable onPress={goToNewTask} style={[styles.addButton, { backgroundColor: "#546c04", width: 40, height: 40 }]}>
        <Text><Icon name="plus" size={15} color="#fff" /></Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  date: {
    fontWeight: 'semibold',
    fontSize: 15,
  },
  cardContainer: {
    width: '90%',
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#F6F8FA",
    marginVertical: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: { width: -0.5, height: 1 }
  },
  footer: {
    flex: 1,
    position: 'relative',
    width: '100%'
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: "#a0b850",
    shadowOffset: {
      width: -0.5,
      height: 1,
    },
  }
});
