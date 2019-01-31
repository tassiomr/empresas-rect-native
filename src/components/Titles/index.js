import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const Title = ({ children }) => (
    <Text style={styles.title}>{children}</Text>
)

export const SubtTitle = ({ children }) => (
    <Text style={styles.subtitle}>{children}</Text>
)

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.primary
    },
    subtitle: {
        fontSize: 13
    }
})
