import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, View, TextInput, Button, Platform } from 'react-native';
import { CheckBox } from '@rneui/themed';

export default function App() {
  const [tasks, setTasks] = useState([
    { key: '1', description: 'Wake up', completed: false },
    { key: '2', description: 'Be blessed & highly favored', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.key === id ? { ...task, completed: !task.completed } : task));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { key: Date.now().toString(), description: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <CheckBox checked={item.completed} onPress={() => toggleTaskCompletion(item.key)} 
        containerStyle={styles.checkboxContainer}
        checkedColor='cyan'
        uncheckedColor='white'
      />
      <Text style={[styles.taskText, item.completed && { textDecorationLine: 'line-through' }]}>
        {item.description}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>ToDo List</Text>
      </View>

      <FlatList data={tasks} renderItem={renderItem} keyExtractor={item => item.key} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newTask}
          onChangeText={setNewTask}
          placeholder="New Task"
        />
        <Button title="Add" onPress={addTask} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: 'red',
    marginBottom: 0,
    borderColor: 'black',
  }, 
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    paddingHorizontal: 20,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'black',
  },
  taskText: {
    fontSize: 18,
    flex: 1,
    color: 'white'
  },
  checkboxContainer: {
    backgroundColor: 'transparent'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: 'red'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
});
