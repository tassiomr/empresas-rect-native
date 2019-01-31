import React from 'react';
import { AsyncStorage, ScrollView } from 'react-native';
import { ContainerView, Input, ActivityIndicatorView } from '../components';
import { colors } from '../utils/colors';
import { bindActionCreators } from 'redux';
import { logout } from '../redux/actions/login';
import { getAllEnterpresises } from '../redux/actions/enterprise';
import { connect } from 'react-redux';
import { Card } from '../components/Card';
import { ProfileBar } from '../components/ProfileBar';
import User from './User';

class Home extends React.Component {
    state = {
        enterprise: {
            enterprises: []
        },
        show: false
    }

    async componentDidMount() {
        const enterprise = await AsyncStorage.getItem('enterprises');
        if(!enterprise) {
            await this.props.getAllEnterpresises()
        } else {
            this.setState({ enterprise: JSON.parse(enterprise)})
        }
    }

    onHandleTryLogout = () => {
        this.props.logout()
    }

    onHandleShowProfile = () => this.setState({ show: !this.state.show })

    render(){
        const { enterprises, error } = this.props
        const { show } = this.state;
        
        if(!enterprises) {
            return <ActivityIndicatorView />
        }

        return (
            <ContainerView color={colors.white} error={error}>
                <ProfileBar onPress={this.onHandleShowProfile} />    
                <ScrollView
                    contentContainerStyle={{
                        padding: 20
                    }}>
                    <Input />
                    {
                       enterprises.map(e => {
                          return <Card enterprise={e} key={e.id} />
                       })
                    }
                </ScrollView>
                {
                    show 
                    ? <User onPress={this.onHandleTryLogout}/>
                    : null
                }
            </ContainerView>
        )
    }
}


const mapStateToProps = ({ enterprise }) => ({
    enterprises: enterprise.data,
    error: enterprise.error
})

const mapDispatchToProps = dispatch => bindActionCreators({ getAllEnterpresises, logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home)
