import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const TaskList = ({ tasks, toggleTask }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => toggleTask(item.id)}>
      <Text style={[styles.task, item.done && styles.taskDone]}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  taskDone: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default TaskList;
