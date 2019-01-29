import React from 'react';
import { ContainerView, Input } from '../components'

export default class Login extends React.Component { 
    state = {
        username: '',
        password: ''
    }

    onHandleLogin = () => {}

    render() {
        return (
            <ContainerView>
                <Input 
                    placeholder="Username" 
                    value={this.state.username}
                    onChangeText={text => this.setState({ username: text })}
                />
                <Input 
                    placeholder="Username" 
                    value={this.state.username}
                    onChangeText={text => this.setState({ username: text })}
                />
            </ContainerView>
        )
    }
}