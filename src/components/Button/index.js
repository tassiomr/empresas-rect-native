import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Button = ({ onPress, label,color }) => (
    <TouchableOpacity style={[styles.btn, { backgroundColor: color }]} onPress={onPress}>
        <Text style={styles.txt}>{label}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 5,
        borderWidth: 0
        
    },
    txt: {
        fontWeight: 'bold',
        color: 'white',
        borderWidth: 0
    }
})