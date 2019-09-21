import React from 'react';
import {LinearGradient} from "expo-linear-gradient";
import {Image, StyleSheet, View} from "react-native";
import PdfRendering from "./pdf-rendering";
import { Button } from 'react-native-elements';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function renderDocuments(navigate, documents) {

    const render = (doc) => ( <Button 
                                title={doc.name} 
                                // raised={true}
                                type={"solid"}
                                // linearGradientProps={{
                                //     colors: ['red', 'pink'],
                                //     start: { x: 0, y: 0.5 },
                                //     end: { x: 1, y: 0.5 },
                                // }}
                                buttonStyle={{
                                    height: 100,
                                    width: 300,
                                    left: 0,
                                    top: 0,
                                    // backgroundColor: '#81539E',
                                    borderRadius: 15,
                                    elevation: 10
                                }}
                                onPress={() => navigate('ViewPdf', { file: doc.file })}
                                />);

    return (<React.Fragment>
        {documents.map(render)}
    </React.Fragment>);
}

export default class ParentInfo extends React.Component {
    static navigationOptions = {
        title: 'Parents',
    };
    render() {
        const { navigate } = this.props.navigation;

        const documents = [
            {name: 'Parent Handbook', file: 'https://storage.googleapis.com/codeforgood19-res/Parent%20Handbook.pdf'},
            {name: 'Spanish - Medical Information', file: 'https://storage.googleapis.com/codeforgood19-res/Medical%20Information%20Spanish.pdf'},
            {name: 'Spanish - Info Grandparents', file: 'https://storage.googleapis.com/codeforgood19-res/Information%20for%20Grandparents%20Spanish.pdf'},
            {name: 'Free Chicago Events', file: 'https://storage.googleapis.com/codeforgood19-res/Free%20Chicago%20Events.pdf'},
            {name: 'Cyber Bullying', file: 'https://storage.googleapis.com/codeforgood19-res/Cyber%20Bullying.pdf'},
            {name: 'Coloring Book', file: 'https://storage.googleapis.com/codeforgood19-res/Coloring-Book.pdf'},
            {name: 'Advocacy Parent Folder', file: 'https://storage.googleapis.com/codeforgood19-res/Advocacy%20Parent%20Folder.pdf'},
        ];


        return (
            <LinearGradient
                colors={['#b55eae', '#00d4ff']}
                style={{flex: 1, display: 'flex', flexDirection: 'column'}}

            >
                {renderDocuments(navigate, documents)}
            </LinearGradient>
        );
    }
}

export class ViewPdf extends React.Component {
    static navigationOptions = {
        title: 'PDF',
    };
    render() {
        const navigation = this.props.navigation;
        const { navigate, goBack } = this.props.navigation;

        const file = navigation.getParam('file', '');
        if (file === '') {
            goBack();
        }

        return (
            <LinearGradient
                colors={['#b55eae', '#00d4ff']}
                style={{flex: 1, display: 'flex', flexDirection: 'column'}}
            >
                <PdfRendering style={{flexGrow: 1}} file={file}/>
            </LinearGradient>
        );
    }
}



