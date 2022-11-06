import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight(),
        justifyContent: 'space-between'
    },
    clouds: {
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cloudImage: {
        height: 100,
        width: 150,
        resizeMode: 'contain'
    },
    center: {
        height: '60%',
        width: '100%',
        justifyContent: 'space-around'
    },
    seniors: {
        height: '60%',
        width: '100%',
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    text: {
        fontSize: 36,
        textAlign: 'center',
        color: '#3e8974'
    },
    footer: {
        height: '20%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    plant: {
        height: 120,
        width: 45,
        resizeMode: 'contain'
    },
    logo: {
        height: 80,
        width: 80,
        resizeMode: 'contain',
        position: 'relative',
        alignSelf: 'center'
    }
});