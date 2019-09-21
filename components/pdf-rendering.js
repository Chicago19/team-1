import {Image, StyleSheet, View} from "react-native";
import React, {useEffect, useState, useRef} from "react";
// import {LinearGradient} from "expo-linear-gradient";
import {WebView} from "react-native-webview";
import PDFReader from 'rn-pdf-reader-js';
import { Text }  from "react-native";
import { Asset } from 'expo-asset';
// import { Constants } from 'expo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        height: '100%',
    },
    webview: {
        flex: 1,
        // backgroundColor: 'rgb(82, 86, 89)',
    },

});

const PdfRendering = (props) => {
    return (
        <View style={styles.container}>
            <WebView
                onLoad={()=>{
                    console.log('onLoad()')
                }}
                useWebKit
                originWhitelist={['http://*', 'https://*', 'file://*', 'data:*']}
                style={[styles.webview]}
                source={{ uri: props.file }}
            />
        </View>
    );
};

export default PdfRendering;

