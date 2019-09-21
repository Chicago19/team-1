import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'

export default function App() {
  let pic = {
    uri: './assets/ccaclogo.jpeg'
  };
  return (
    <View style={styles.container}>
      <Image source={require('./assets/ccaclogo.jpg')} style={{width: 400, height: 300}}/>
      <Button
        title="Parents"
        color="#fff"
        buttonStyle={{height: 100, width: 300, right: 200, top: 200}}
        onPress={() => Alert.alert('You picked parents!')}
      />
      <Button
        title="Children"
        color="#fff"
        buttonStyle={{height: 100, width: 300, left: 200, top: 100}}
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
        buttonStyle={{left: 325, bottom: 700, borderRadius: 50}}
        onPress={() => Alert.alert('You picked system administrator!')}
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
