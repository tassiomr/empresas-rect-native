import React from 'react';
import { View, StatusBar } from 'react-native';

export const ContainerView = ({ color, children }) => (
    <View style={{ flex: 1, backgroundColor: color }}>
        <StatusBar backgroundColor={color} />
        { children }
    </View>
)