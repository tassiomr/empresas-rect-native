import React from 'react';
import { Image, ActivityIndicator } from 'react-native';
import colors from '../../utils/colors';
import { ContainerView } from '../ContainerView';
import { Wrapper } from '../Wrapper';

export const ActivityIndicatorView = () => (
  <ContainerView color={colors.primary}>
    <Wrapper style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
      <Image source={require('../../assets/translucid_icon_invert.png')} style={{ width: 100, height: 100 }} />
      <ActivityIndicator size="large" color={colors.white}style={{ maringTop: 15 }} />
    </Wrapper>
  </ContainerView>
);

export default ActivityIndicatorView;
