import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Wrapper = ({ children, style }) => (
    <View style={[styles.container, style]}
    >
        { children }
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
