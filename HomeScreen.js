import React from 'react';

import { StyleSheet, View, Image, Alert, Dimensions, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'

console.disableYellowBox = true;

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#b55eae',
        },
    };

    // state = Dimensions.get("window");
    handler = dims => this.setState(dims);

    componentWillMount() {
        Dimensions.addEventListener("change", this.handler);
    }

    componentWillUnmount() {
        // Important to stop updating state after unmount
        Dimensions.removeEventListener("change", this.handler);
    }

    render() {

        var btn1Attr = {height: 100, 
                        width: 300,
                        right: 200,
                        top: 200,
                        fontSize: 50,
                        radius: 15}
                        
        var btn2Attr = {
            height: 100,
            width: 300,
            left: 200,
            top: 90,
            fontSize: 50,
            radius: 15}
        // const { width, height } = this.state.window;
        var { height, width } = Dimensions.get('window');
        if (width < 650) {
            btn1Attr.height = 60;
            btn1Attr.width = width;
            btn1Attr.right = 0;
            btn1Attr.top = 50;
            btn1Attr.fontSize = 35;
            btn1Attr.radius = 5;

            btn2Attr.height = 60;
            btn2Attr.width = width;
            btn2Attr.left = 0;
            btn2Attr.top = 50;
            btn2Attr.fontSize = 35;
            btn2Attr.radius = 5;
            
        }
        // const mode = height > width ? "portrait" : "landscape";
        // console.log(`New dimensions ${width}x${height} (${mode})`);
        // return null;
        const { navigate } = this.props.navigation;

        return (

            <LinearGradient
                colors={['#b55eae', '#00d4ff']}
                style={{ flex: 1 }}

            >
                <View style={styles.container}>
                    <Image source={require('./assets/caclogotransparent.png')} style={{ width: 400, height: 300 }} />
                    {/* <p>{this.state}</p> */}
                    <Button
                        title="Parents"
                        color="#fff"
                        // raised={true}
                        // type="outline"
                        titleStyle={{
                            fontSize: btn1Attr.fontSize,
                            // fontFamily: 'Helvetica'
                        }}

                        buttonStyle={{
                            height: btn1Attr.height,
                            width: btn1Attr.width,
                            right: btn1Attr.right,
                            top: btn1Attr.top,
                            backgroundColor: '#81539E',
                            borderRadius: btn1Attr.radius,
                            elevation: 10,
                            marginBottom: 10
                        }}
                        onPress={() => navigate('Parents')}
                    />
                    <Button
                        title="Children"
                        color="#fff"
                        // raised={true}
                        titleStyle={{
                            fontSize: btn2Attr.fontSize,
                            // fontFamily: 'Helvetica'
                        }}
                        buttonStyle={{
                            height: btn2Attr.height,
                            width: btn2Attr.width,
                            left: btn2Attr.left,
                            top: btn2Attr.top,
                            backgroundColor: '#81539E',
                            borderRadius: btn2Attr.radius,
                            elevation: 10,
                            marginBottom: 10
                        }}
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
                        buttonStyle={{ left: 325, bottom: 700, borderRadius: 50, backgroundColor: '#81539E' }}
                        onPress={() => Alert.alert('You picked system administrator!')}
                    />
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