import React from 'react';
import { ContainerView, Wrapper, Input } from '../components';
import { colors } from '../utils/colors';

export default class Home extends React.Component {
    render(){
        return (
            <ContainerView color={colors.white}>
                <Wrapper style={{ margin: 20 }} >
                    <Input />
                </Wrapper>
            </ContainerView>
        )
    }
}