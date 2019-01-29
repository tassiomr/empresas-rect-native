import React from 'react';
import { TextInput } from 'react-native';


export const Input = ({ placeholder, onChangeText, value }) => (
    <TextInput
        placeholder={placeholder}
        onChangeText={text => onChangeText(text)}        
        value={value}
    />
)