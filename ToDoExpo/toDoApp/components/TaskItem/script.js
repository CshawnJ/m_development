import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { icon } from "@rneui/themed";
import { Icon } from '@rneui/base';

const TaskItem = ({ task, onDelete, onToggle }) => {
    return (
    <View style={styles.taskContainer}>
        <TouchableOpacity onPress={() => onToggle(task.id)}>
            <Icon
              name={task.completed ? "check-circle" : "radio-button-unchecked"}
              color={task.completed ? "green" : "gray"}
              />
        </TouchableOpacity>
        <Text style={[styles.taskText, task.completed && styles.completedText]}>
            {task.Text}
            </Text>
            <TouchableOpacity onPress={() => onDelete(text.id)}>
                  <Icon name="delete" color="red" />
            </TouchableOpacity>
            </View>
         );
        };
            const styles = StyleSheet.create({
                taskContainer: {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 10,
                    marginVertical: 5,
                    backgroundColor: "blue",
                    bprderRadius: 10,
                },
                taskText: {
                    flex: 1,
                    marginLeft: 10,
                    fontSize: 16, 
                },
                completedText: {
                    textDecorationLine: "line-through",
                    color: "gray",
                }.
            });
    export default TaskItem;