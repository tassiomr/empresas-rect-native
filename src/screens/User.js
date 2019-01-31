import React from 'react';
import { View, AsyncStorage } from 'react-native';
import { Title, SubtTitle } from '../components/Titles';
import { Button } from '../components';

export default class User extends React.Component {
    state = {
        user: {
            investor: {
                investor_name: '',
                email: '',
                country: '',
                city: ''
            }
        }
    }

    async componentDidMount(){
        const user = await AsyncStorage.getItem('user');
        this.setState({ user: JSON.parse(user) })
    }

    render () {
        const { user } = this.state;
        return (
            <View style={{ 
                position: 'absolute' ,  
                backgroundColor: 'rgba(0,0,0,0.4)', 
                height: '100%', 
                alignItems: 'flex-end',
                width: '100%' }}>
                <View style={{ 
                    top: '9%',
                    paddingTop: 5,
                    marginRight: 40,
                    backgroundColor: 'white', 
                    borderRadius: 5,
                    height: '30%',
                    width: '65%' }}>
                    <View style={{ paddingLeft: 15, flex: 1 }}>
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
                    </View>
                    <Button label="Logout" color="cyan"/>
                </View>
            </View>
        )
    }
}