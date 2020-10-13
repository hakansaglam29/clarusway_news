import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';

const Input = ({ph}) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={ph}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        padding: Platform.OS == "ios" ? 15 : 5,
        margin: 10,
        borderRadius: 10,
        marginVertical: 20
    }
})

export {Input}