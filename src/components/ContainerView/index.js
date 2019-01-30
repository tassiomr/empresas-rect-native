import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

export const ContainerView = ({ color, children }) => (
    <View style={[
            styles.container,
            { backgroundColor: color }]}
    >
        <StatusBar backgroundColor={color} barStyle="dark-content" />
        { children }
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
