import React, {Component} from 'react';
import {AppRegistry, StyleSheet,Text,View,Dimensions,Animated
} from 'react-native';

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            movePlayerVal: new Animated.Value(40),
                playerSide: 'left',
                points: 0,
        };
        }
    } 
    render () {
        return(
            <Image source={require('./assests/game.png')} style={style.containet}>
            
            <View style={{ flex: 1, alignItems: 'center', marginTop: 80}}
                <View style={{styles.points}}>
                    <Text style={{ fontWight: 'bold', fontSize: 40}}>{this.state.points}></Text>
                </View>
                <Animated.Image source={require('./assests/butterfly.png')}
                style={{
                    height:100,
                    width:100,
                    position: 'absolute',
                    zIndex: 1
                    bottom: 50,
                    resizeMode: 'stretch'
                    transform:[
                        { translateX: this.is.state.movePlayerVal}
                    ]
                }}
                />

                <View style={styles.controls}>
                    <Text style={styles.left} onPress={() => this.movePlayer('left')}>{'<'}</Text>
                    <Text style={styles.right}onPress={() => this.movePlayer('right')}>{'>'}</Text>    
                   
                </View>
           
            </Image>

        
        );
    }
    movePlayer(direction){
   
        if (direction == 'right') {
            this.setState({ playerSide: 'right' });

            Animated.spring(
                this.state.movePlayerVal,
                {
                    toValue: Dimensions.get('window').width = 140,
                    tension: 120,
                } 
            ).start();

        } else if (direction == 'left') {
            this.setState({ playerSide: 'left' });

            Animated.spring(
                this.state.movePlayerVal,
                {
                    toValue: 40,
                    tension: 120,
                } 
            ).start();

        }
        

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        position: 'relative',
        resizeMode: 'cover',
    },
    points: {
        width: 80,
        height:80,
        bacgroundColor: '#81539E',
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
        color: '#81539E'
        margin: 0,
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    left: {
        flex: 1,
        color: '#81539E'
        margin: 0,
        fontSize: 60,
        fontWeight: 'bold'
        textAlign: 'right'
    },
    

});

AppRegistry.registerComponent('Game', () => Game); 
