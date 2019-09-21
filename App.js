import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Button } from 'react-native-elements';

export default function App() {
  let pic = {
    uri: './assets/ccaclogo.jpeg'
  };
  return (
    <View style={styles.container}>
      <Image source={require('./assets/ccaclogo.jpg')} style={{width: 400, height: 300}}/>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Parents"
        color="#fff"
        style={{right: 200}}
        onPress={() => Alert.alert('You picked parents!')}
      />
      <Button
        title="Children"
        color="#fff"
        style={{left: 200}}
        onPress={() => Alert.alert('You picked children!')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8E44AD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
