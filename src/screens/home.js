import { collection, getFirestore, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Pressable,
  View,
  ScrollView,
  Alert

} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";

export function Home({ navigation }) {
  const [newTask, setNewTask] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [deleteTask, setDeleteTask] = useState(null)
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

  const deleteOneTask = (id) => {
    setDeleteTask(id);
    setModalVisible(true)
  }

  const clickDeleteTask = async () => {
    if (deleteTask) {
      try {
        await deleteDoc(doc(db, "appTask", deleteTask));
        console.log("Task successfully deleted");
        fetchTasks();
      } catch (error) {
        Alert.alert("Erro", "Error new task: " + error.message);
      }
      setDeleteTask(null);
    }
    setModalVisible(false);
  };

  const Item = ({ task }) => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.cardContainer}>
          <Text style={styles.title}>{task.name} </Text>
          <Text style={styles.date}>Deadline: {task.dateTask}</Text>

          <View style={styles.buttonContainer}>
            <Pressable onPress={() => navigation.navigate('Edit', { task, onGoBack: fetchTasks })} style={[styles.button, { backgroundColor: "#4B53B4" }]}>
              <Text><Icon name="pencil" size={15} color="#fff" /></Text>
            </Pressable>
            <Pressable onPress={() => deleteOneTask(task.id)} style={[styles.button, { backgroundColor: "red", marginLeft: 8 }]}>
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

      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Are you sure you want to delete this task?</Text>
          <View style={styles.modalButtons}>
            <Pressable onPress={clickDeleteTask} style={[styles.modalButton, styles.confirmButton]}>
              <Text style={styles.buttonText}>Yes</Text>
            </Pressable>
            <Pressable onPress={() => setModalVisible(false)} style={[styles.modalButton, styles.cancelButton]}>
              <Text style={styles.buttonText}>No</Text>
            </Pressable>
          </View>
        </View>
      </Modal>


      <StatusBar style="auto" />

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
    paddingTop: 20,
    paddingHorizontal: 16,
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
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#4B53B4',
  },
  cancelButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  }
});
