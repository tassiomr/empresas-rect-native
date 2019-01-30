import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ContainerView, Input, Button } from '../components'
import { tryLogin } from '../redux/actions/login';

class Login extends React.Component { 
    state = {
        username: 'testeapple@ioasys.com.br',
        password: '12341234'
    }

    onHandleLogin = () => {
        const { email, password } = this.state;
        this.props.tryLogin(
           email,
           password
        );
    }

    render() {
        return (
            <ContainerView color="tomato">
                <Input 
                    keyboardType="email-address"
                    placeholder="Email" 
                    value={this.state.username}
                    onChangeText={text => this.setState({ username: text })}
                />
                <Input 
                    keyboardType="numeric"
                    placeholder="Password" 
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={text => this.setState({ username: text })}
                />
                <Button 
                    label="Login"
                    color="cyan"
                    onPress={this.onHandleLogin}
                />
            </ContainerView>
        )
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators({ tryLogin },dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
