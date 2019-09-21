import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, View, Image, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#b55eae',
          },
    };
    render() {

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
                    titleStyle={{
                        fontSize: 50,
                        fontFamily: 'Helvetica'
                    }}
                    buttonStyle={{height: 100, width: 300, right: 200, top: 200, backgroundColor: '#81539E', borderRadius: 25}}
                    onPress={() => navigate('Parents')}
                />
                <Button
                    title="Children"
                    color="#fff"
                    titleStyle={{
                        fontSize: 50,
                        fontFamily: 'Helvetica'
                    }}
                    buttonStyle={{height: 100, width: 300, left: 200, top: 100, backgroundColor: '#81539E', borderRadius: 25}}
                    onPress={() => navigate('Children')}
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

class ParentsScreen extends React.Component {
    static navigationOptions = {
        title: 'Parents',
        headerStyle: {
            backgroundColor: '#b55eae',
          },
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <LinearGradient
            colors={['#b55eae', '#00d4ff']}
            style={{flex: 1}}
            
            >
            <View style={styles.container}>
                <Image source={require('./assets/ccaclogotransparent.png')} style={{width: 400, height: 300}}/>
            </View>
            </LinearGradient>
        );
    }
}

class ChildrensScreen extends React.Component {
    static navigationOptions = {
        title: 'Children',
        headerStyle: {
            backgroundColor: '#b55eae',
          },
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <LinearGradient
            colors={['#b55eae', '#00d4ff']}
            style={{flex: 1}}
            >
            <View style={styles.container}>
                <Image source={require('./assets/ccaclogotransparent.png')} style={{width: 400, height: 300}}/>
                <Image source={require('./assets/AngryBirdsSpace.jpg')} style={{width:100, height: 100}}/>
                <Image source={require('./assets/BadPiggies.png')} style={{width:100, height: 100}}/>
                <Image source={require('./assets/Pitfall.jpg')} style={{width:100, height: 100}}/>
                <Image source={require('./assets/GeometryDash.png')} style={{width:100, height: 100}}/>
            </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Parents: { screen: ParentsScreen },
    Children: { screen: ChildrensScreen }
});

const App = createAppContainer(MainNavigator);

export default App;