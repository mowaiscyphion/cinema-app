import React from 'react'
import { Dimensions, Image, ImageBackground, SafeAreaView, StyleSheet, Text } from 'react-native'
const dimensions = Dimensions.get('window')

const SpashScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground resizeMode='cover' source={require('../images/Splash.png')} style={[styles.main, { height: '100%', width: '100%' }]}>
                <Image resizeMode='cover' source={require('../images/Logo.png')} style={{ width: 90, height: 90 }} />
                <Text style={styles.text}>
                    My Cinema Hub
                </Text>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default SpashScreen

const styles = StyleSheet.create({
    main: {
        width: dimensions.width,
        height: dimensions.height,
        backgroundColor: "#0f0f0f0",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        textAlign: 'center',
    },
    text: {
        fontSize: 20,
        color: 'white',
    }
})