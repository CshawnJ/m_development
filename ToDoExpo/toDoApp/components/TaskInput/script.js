import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from '@rneui/themed';

const TaskInput = ({ onAdd }) => {
    const [texr, setText] = useState("");

    const handleAddTask = () => {
        if (Text.trim()) {
            onAdd(text); 
            setText("");
        }
    };
    return (
    
    )
}