import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


export const Input = ({ placeholder, secureTextEntry, keyboardType, onChangeText, value }) => (
    <TextInput
        placeholder={placeholder}
        onChangeText={text => onChangeText(text)}        
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={styles.input}
    />
)

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 55,
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderRadius: 5,
        margin: 5,
        paddingLeft: 10,
        paddingRight: 10
    }
})
