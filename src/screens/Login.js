import React from 'react';
import { ContainerView, Input, Button } from '../components'

export default class Login extends React.Component { 
    state = {
        username: '',
        password: ''
    }

    onHandleLogin = () => {}

    render() {
        return (
            <ContainerView color="tomato">
                <Input 
                    placeholder="Username" 
                    value={this.state.username}
                    onChangeText={text => this.setState({ username: text })}
                />
                <Input 
                    placeholder="Password" 
                    value={this.state.username}
                    onChangeText={text => this.setState({ username: text })}
                />
                <Button 
                    label="Login"
                    color="cyan"
                    onPress={() => {}}
                />
            </ContainerView>
        )
    }
}