import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NativeModules
} from 'react-native';

export default class RNDemo extends Component {
    _toast(){
        NativeModules.ToastModule.show('toast', NativeModules.ToastModule.SHORT,(success)=>{alert(success)},(error)=>{alert(error)})
    }
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this._toast} style={styles.welcome}>
                    Welcome to React Native!
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

AppRegistry.registerComponent('RNDemo', () => RNDemo);
