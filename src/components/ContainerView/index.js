import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

export const ContainerView = ({ color, children }) => (
    <View style={[
            styles.container,
            { backgroundColor: color }]}
    >
        <StatusBar backgroundColor={color} />
        { children }
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
})
