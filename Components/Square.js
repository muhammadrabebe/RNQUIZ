import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.square}></View>
    );
}

const styles = StyleSheet.create({
    square: {
        borderRadius : 5,
        width : 30, 
        height : 30,
        backgroundColor : '#323d57',
        
    }
});
