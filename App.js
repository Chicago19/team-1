import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, View, Image, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {

        let pic = {
            uri: './assets/ccaclogo.jpeg'
        };
        const { navigate } = this.props.navigation;

        return (
            <LinearGradient
            colors={['#b55eae', '#00d4ff']}
            style={{flex: 1}}
            
            >
            <View style={styles.container}>
                <Image source={require('./assets/ccaclogotransparent.png')} style={{width: 400, height: 300}}/>
                <Button
                title="Parents"
                color="#fff"
                buttonStyle={{height: 100, width: 300, right: 200, top: 200, backgroundColor: '#81539E'}}
                onPress={() => navigate('Profile', { name: 'Jane' })}
                />
                <Button
                title="Children"
                color="#fff"
                buttonStyle={{height: 100, width: 300, left: 200, top: 100, backgroundColor: '#81539E'}}
                onPress={() => Alert.alert('You picked children!')}
                />
                <Button
                icon={
                    <Icon
                    name="rowing"
                    size={15}
                    color="white"
                    />
                }
                buttonStyle={{left: 325, bottom: 700, borderRadius: 50, backgroundColor: '#81539E'}}
                onPress={() => Alert.alert('You picked system administrator!')}
            />
            </View>
            </LinearGradient>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'linear-gradient(red, yellow)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
});

const App = createAppContainer(MainNavigator);

export default App;