import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const Title = ({ children }) => (
    <Text style={styles.title}>{children}</Text>
)

export const SubtTitle = ({ children }) => (
    <Text style={styles.subtitle}>{children}</Text>
)

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 14
    }
})
