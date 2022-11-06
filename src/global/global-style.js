import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight(),
    },
    text: {
        fontSize: 36,
        textAlign: 'center',
        color: '#3e8974',
        marginHorizontal: 30,
        fontWeight: '900'
    },
});