import { Linking } from 'react-native';

export function launchApp(url) {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
}


