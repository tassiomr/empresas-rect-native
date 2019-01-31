import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Image } from '../Image';
import { profile } from '../../utils/strings';
import { colors } from '../../utils/colors';

export const ProfileBar = ({ uri }) => (
    <View style={{ elevation: 1.7, backgroundColor: colors.white, width: '100%', height: 60, justifyContent: 'center', paddingRight: 20, alignItems: "flex-end", }}>
        <TouchableOpacity>
            <Image uri={profile} size={50} style={{ borderRadius: 100 }} />
        </TouchableOpacity>
    </View>
)