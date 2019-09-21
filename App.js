import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() => navigate('Profile', { name: 'Jane' })}
            />
        );
    }
}

class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome2',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Home profile"
                onPress={() => navigate('Home', { name: 'Jane' })}
            />
        );
    }
}

const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
});

const App = createAppContainer(MainNavigator);

export default App;