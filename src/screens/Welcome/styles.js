import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight() + 80,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 36,
        textAlign: 'center',
        color: '#3e8974',
        marginHorizontal: 30,
        fontWeight: '900'
    },
    textButton: {
        fontSize: 14,
        textAlign: 'center',
        color: '#3e8974',
        fontWeight: '900'
    },
    buttons: {
        marginHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});