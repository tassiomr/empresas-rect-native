import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { ContainerView, Input, Button,  Wrapper } from '../components'
import { tryLogin, setCredentials } from '../redux/actions/login';
import { colors } from '../utils/colors';

class Login extends React.Component { 
    state = {
        email: 'testeapple@ioasys.com.br',
        password: '12341234',
    }

    componentDidUpdate(prevState) {
        const { setCredentials, data, user } = this.props;

        if(prevState.data !== data && data && user) {
        this.setState({ message: 'entrou' })
            setCredentials(data, user);
        }
    }

    onHandleLogin = () => {
        const { email, password } = this.state;
        this.props.tryLogin(
           email,
           password
        );
    }

    render() {
        const { loading, login, error } = this.props;
        
        return (
            <ContainerView color={colors.primary} error={error}>
                <Wrapper style={styles.wrapper}>
                    <Wrapper style={{ height: '45%', width: '100%', justifyContent: 'space-around' }}>
                        <Image uri={require('../assets/ioasys.png')} width="50%"  height={80}/>
                        <Input 
                            keyboardType="email-address"
                            placeholder="Email" 
                            value={this.state.email}
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
                            txtColor={colors.white}
                            color={colors.brown}
                            loading={loading}
                            onPress={this.onHandleLogin}
                        />
                    </Wrapper>
                </Wrapper>
            </ContainerView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 35
    }
})

const mapStateToProps = ({ login }) => ({
    login,
    data: login.data,
    user: login.user,
    loading: login.loading,
    error: login.error
})
const mapDispatchToProps = dispatch => bindActionCreators({ tryLogin, setCredentials },dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
