import React from 'react';
import { Image, ActivityIndicator } from 'react-native';
import { colors } from '../../utils/colors';
import { ContainerView } from '../ContainerView';
import { Wrapper } from '../Wrapper';

export const ActivityIndicatorView = () => (
    <ContainerView color={colors.primary}>
        <Wrapper style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <Image source={require('../../assets/ioasys.png')} style={{ width: '50%', height: 80 }} />
            <ActivityIndicator size="large" color={colors.black} />
        </Wrapper>
    </ContainerView>
)