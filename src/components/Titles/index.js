import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const Title = ({ children, color }) => (
    <Text style={[styles.title, { color: color || colors.primary }]}>{children}</Text>
)

export const SubtTitle = ({ children, color }) => (
    <Text style={[styles.subtitle, { color: color }]}>{children}</Text>
)

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 13
    }
})
