import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
export const MessageComponent = ({title}:any) => (
    <View style={ styles.container }>
        <Text style={ styles.title }> { title } </Text>
    </View>

)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        color: 'black'
    }
});