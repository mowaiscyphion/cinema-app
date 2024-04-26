import React from 'react'
import { Dimensions, Image, SafeAreaView, StyleSheet, View } from 'react-native'
import SplashImage from '../images/Splash.png'
const dimensions = Dimensions.get('window')

const SpashScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.main}>
                <View >
                    <Image resizeMode='cover' source={SplashImage} style={{ width: dimensions.width, height: dimensions.height }} />
                </View>
            </View>
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
    }
})