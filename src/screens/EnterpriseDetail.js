import React from 'react';
import { Animated, StyleSheet, AsyncStorage } from 'react-native';
import { Title, SubtTitle, IconBar, Wrapper } from '../components';
import { colors } from '../utils/colors';

export default class EnterpriseDetail extends React.Component {
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
        const { animateOpacity } = this.state;
        const { enterprise } = this.props;
        return (
            <Animated.View style={[styles.container, { opacity: animateOpacity }]}>
                <Animated.View style={[styles.modal, { opacity: animateOpacity }]}>
                    <Animated.View style={[styles.title, { opacity: animateOpacity }]}>
                        <Title color={colors.white}>
                            {enterprise.enterprise_name}
                        </Title>
                    </Animated.View>
                        <Wrapper style={{ flex: 1, padding: 5 }}>
                            <SubtTitle>
                            Location: {enterprise.city} - {enterprise.country}
                            </SubtTitle>
                            <SubtTitle>
                            Type: {enterprise.enterprise_type.enterprise_type_name}
                            </SubtTitle>
                            { 
                                enterprise.email
                                ? <SubtTitle>{enterprise.email}</SubtTitle>
                                : null
                            }
                        </Wrapper>
                        <Wrapper style={{ flex: 4 , padding: 5 }}>
                            <SubtTitle>
                                {enterprise.description}
                            </SubtTitle>
                        </Wrapper>
                        
                        <IconBar
                            facebook={enterprise.facebook}
                            twitter={enterprise.twitter}
                            linkedin={enterprise.linkedin}
                        />
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
        justifyContent: 'center',
        width: '100%'
    },
    modal: {
        backgroundColor: 'white', 
        borderRadius: 5,
        height: '60%',
        elevation: 8,
        width: '90%',
    },
    title: {
        backgroundColor: colors.primary,
        height: 80,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

/*
    enterprise : {
        id,
        email_enterprise,
        facebook,
        twitter,
        linkedin,
        enterprise_name,
        description,
        city,
        country,
        enterprise_type: {
            enterprise_type_name,
        }
    }

*/
