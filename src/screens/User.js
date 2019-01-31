import React from 'react';
import { Animated, View, AsyncStorage } from 'react-native';
import { Title, SubtTitle } from '../components/Titles';
import { Button } from '../components';

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
                duration: 900
            }
        ).start()
    }

    render () {
        const { user, animateOpacity } = this.state;
        return (
            <Animated.View style={{ 
                position: 'absolute' ,  
                backgroundColor: 'rgba(0,0,0,0.4)', 
                height: '100%', 
                opacity: animateOpacity,
                alignItems: 'fssslex-end',
                width: '100%' }}>
                <Animated.View style={{ 
                    top: '9%',
                    paddingTop: 5,
                    marginRight: 40,
                    backgroundColor: 'white', 
                    borderRadius: 5,
                    opacity: animateOpacity,
                    height: '30%',
                    width: '65%' }}>
                    <Animated.View style={{ opacity: animateOpacity, paddingLeft: 15, flex: 1 }}>
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
                    <Button label="Logout" color="cyan"/>
                </Animated.View>
            </Animated.View>
        )
    }
}