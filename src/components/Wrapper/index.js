import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Wrapper = ({ children, style }) => (
    <View style={ style}
    >
        { children }
    </View>
)

