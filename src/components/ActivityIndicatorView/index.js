import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { colors } from '../../utils/colors';

export const ActivityIndicatorView = () => {
    <View style={{ flex: 1 }}>
        <ActivityIndicator size="large" color={colors.primary} />
    </View>
}