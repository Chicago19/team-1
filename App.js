import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {StyleSheet, View, Image, Alert, AppRegistry, Dimensions, Animated, Text, ImageBackground} from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'
import ParentInfo, {ViewPdf} from "./components/parent-info";


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
                <Image source={require('./assets/caclogotransparent.png')} style={{width: 400, height: 300}}/>
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
                <Image source={require('./assets/caclogotransparent.png')} style={{width: 400, height: 300}}/>
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
                <Image source={require('./assets/caclogotransparent.png')} style={{width: 400, height: 300}}/>
                <Button
                    title="Play Game!"
                    color="#fff"
                    titleStyle={{
                        fontSize: 50,
                        fontFamily: 'Helvetica'
                    }}
                    buttonStyle={{height: 100, width: 300, backgroundColor: '#81539E', borderRadius: 25}}
                    onPress={() => navigate('Game')}
                />
                <Image source={require('./assets/AngryBirdsSpace.png')} style={{width:120, height: 120, right:220, top:210}}/>
                <Image source={require('./assets/BadPiggies.png')} style={{width:100, height: 100, right:110, top:100}}/>
                <Image source={require('./assets/Pitfall.jpg')} style={{width:100, height: 100}}/>
                <Image source={require('./assets/GeometryDash.png')} style={{width:100, height: 100, left:110, bottom:100}}/>
                <Image source={require('./assets/SubwaySurfers.jpg')} style={{width:100, height: 100, left:220, bottom:200}}/>
            </View>
            </LinearGradient>
        );
    }
}

class Enemy extends Component {
    render(){
        return (
            <Animated.Image source={this.props.enemyImg}
                style={{
                height: 100,
                width: 100,
                position: 'absolute',
                resizeMode: 'stretch',
                left: this.props.enemyStartposX,
                transform: [
                    { translateY: this.props.moveEnemyval},
                ]
            }}></Animated.Image> 
        );
    }
} 

class Game extends React.Component {
    static navigationOptions = {
        title: 'Game',
        headerStyle: {
            backgroundColor: '#b55eae',
          },
    };
    constructor(props){
        super(props);
        this.state = {
            movePlayerVal: new Animated.Value(40),
                playerSide: 'left',
                points: 0,
                moveEnemyval: new Animated.Value(0),
                enemyStartposX: 0,
                enemySide: 'left',
                enemySpeed: 4200,

                gameOver: false,
        };
    }
    render () {
        return(
            <LinearGradient
            colors={['#b55eae', '#00d4ff']}
            style={{flex: 1}}
            >
                <ImageBackground source={require('./assets/game.png')} style={styles.container}>
                    <View style={{ flex: 1, alignItems: 'center', marginTop: 80}}>
                        <View style={styles.points}>
                            <Text style={{ fontWeight: 'bold', fontSize: 40}}>{this.state.points}</Text>
                        </View>
                        <Animated.Image source={require('./assets/butterfly.png')}
                        style={{
                            height:200,
                            width:200,
                            position: 'absolute',
                            zIndex: 1,
                            bottom: 50,
                            resizeMode: 'stretch',
                            transform:[
                                { translateX: this.state.movePlayerVal}
                            ]
                        }}></Animated.Image>

                        <Enemy enemyImg={require('./assets/flowers.jpg')}
                        enemyStartposX={this.state.enemyStartposX}
                        moveEnemyval={this.state.moveEnemyval}
                        />

                        <View style={styles.controls}>
                            <Text style={styles.left} onPress={() => this.movePlayer('left')}>{'<'}</Text>
                            <Text style={styles.right} onPress={() => this.movePlayer('right')}>{'>'}</Text>                       
                        </View>
                    </View>
                </ImageBackground>
            </LinearGradient>
        
        );
    }
    movePlayer(direction){
   
        if (direction == 'right') {
            this.setState({ playerSide: 'right' });

            Animated.spring(
                this.state.movePlayerVal,
                {
                    toValue: 200,
                    tension: 20,
                } 
            ).start();

        } else if (direction == 'left') {
            this.setState({ playerSide: 'left' });

            Animated.spring(
                this.state.movePlayerVal,
                {
                    toValue: -200,
                    tension: 20,
                } 
            ).start();

        }
    }
    componentDidMount(){
        this.animateEnemy();
    }
    animateEnemy(){
        this.state.moveEnemyval.setValue(-100);
        var windhowH = Dimensions.get('window').height;
        var r = Math.floor(Math.random()* 2) + 1; 

        if (r==2){
            r = 40;
            this.setState({ enemySide: 'left' });
        } else {
            r = Dimensions.get('window').width - 140;
            this.setState({ enemySide: 'right' });
        }
        this.setState({ enemyStartposX:r });

        var refreshIntervalvalId;
        refreshIntervalId = setInterval (() => {
        
        if (this.state.moveEnemyval.value > windhowH - 280 
            && this.state.moveEnemyval._value < windowH - 180
            && this.state.playerSide == this.state.enemySide ){
                
                clearInterval(refreshIntervalid)
                this.setState({ gameOver: true});
                this.gameOver();

            } 
        },50); 

        setInterval(() => {
            this.setState({ enemySpeed: this.state.enemySpeed - 50 })
        }, 2000); 

        Animated.timing(
            this.state.moveEnemyval, 
            {
                toValue: Dimensions.get('window').height,
                duration: this.state.enemySpeed,
            }
        ).start(event => {
            if(event.finished && this.state.gameOver == false ) {
                
                clearInterval(refreshIntervalId);
                this.setState({ points: ++this.state.points })
                this.animateEnemy(); 
            }
        });

    }

    gameOver() {
        Alert('Try again next time!');
    }
        
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    points: {
        width: 80,
        height:80,
        backgroundColor: '#81539E',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',

    },
    controls: {
        alignItems:'center',
        flexDirection:'row',
    },
    right:{
        flex: 1,
        color: '#81539E',
        margin: 0,
        left: 200,
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    left: {
        flex: 1,
        color: '#81539E',
        margin: 0,
        right: 200,
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'right'
    },
});

const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Parents: { screen: ParentInfo },
    ViewPdf: { screen: ViewPdf },
    Children: { screen: ChildrensScreen },
    Game: {screen: Game}
});

const App = createAppContainer(MainNavigator);

export default App;