import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Title } from '../Titles';

export const ContainerView = ({ color, children, error }) => (
    <View style={[
            styles.container,
            { backgroundColor: color }]}
    >
        <StatusBar backgroundColor={color} barStyle="dark-content" />
        { children }
        {
            error 
            ? <View style={{ height: 50, backgroundColor: 'yellow', justifyContent: "center", alignItems: 'center' }}><Title>{error}</Title></View>
            : null
        }
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
