import React from 'react';
import { Animated, StyleSheet, AsyncStorage } from 'react-native';
import { Title, SubtTitle } from '../components/Titles';

export default class User extends React.Component {
    state = {
        animateOpacity: new Animated.Value(0),
        user: {
            investor: {
                investor_name: '',
                email: '',
                country: '',
                city: ''
            }
        }
    }

    async componentDidMount() {
        const user = await AsyncStorage.getItem('user');
        this.setState({ user: JSON.parse(user) })
        Animated.timing(
            this.state.animateOpacity,
            {
                toValue: 1,
                duration: 300
            }
        ).start()
    }

    render () {
        const { user, animateOpacity } = this.state;
        return (
            <Animated.View style={[styles.container, { opacity: animateOpacity }]}>
                <Animated.View style={[styles.modal, { opacity: animateOpacity }]}>
                        <Title>
                           { user.investor.investor_name } 
                        </Title>
                        <SubtTitle>
                            Email { user.investor.email}
                        </SubtTitle>
                        <SubtTitle>
                            City: { user.investor.city }
                        </SubtTitle>
                        <SubtTitle>
                            Country { user.investor.country }
                        </SubtTitle>
                </Animated.View>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute' ,  
        backgroundColor: 'rgba(0,0,0,0.4)', 
        height: '100%', 
        alignItems: 'center',
        width: '100%'
    },
    modal: {
        top: '10%',
        paddingTop: 5,
        paddingLeft: 15,
        backgroundColor: 'white', 
        borderRadius: 5,
        height: '16%',
        elevation: 8,
        width: '97%' 
    }
})
