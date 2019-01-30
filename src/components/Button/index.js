import React from 'react';
import { ActivityIndicator, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Button = ({ onPress, label, loading, color, txtColor }) => (
    <TouchableOpacity
        style={[styles.btn, { backgroundColor: color }]}
        onPress={onPress}>
        {
            loading
            ? <ActivityIndicator size="small" color={txtColor} />
            : <Text style={[styles.txt, { color: txtColor }]}>{label}</Text>
        }
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
        borderWidth: 0
    }
})
