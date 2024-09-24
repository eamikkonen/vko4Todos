import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskInput = ({ inputTask, setInputTask, addTask }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={inputTask}
        onChangeText={(text) => setInputTask(text)}
      />
      <Button title="Save" onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    flex: 1,
    marginRight: 10,
  },
});

export default TaskInput;
