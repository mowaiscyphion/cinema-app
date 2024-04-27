import auth from '@react-native-firebase/auth';
import React from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const dimensions = Dimensions.get('window')

const Profile = ({ navigation }) => {

    const handleSignout = async () => {
        auth()
            .signOut()
            .then(() => {
                navigation.navigate('Login')
            });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#191e23' }}>
            <ScrollView>
                <View style={{ paddingHorizontal: 20, justifyContent: 'center', height: dimensions.height * 1 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../images/logout.png')} style={{ width: dimensions.width * 0.9, height: 300, }} />
                    </View>
                    <Text style={styles.text}>Thank you for using our cinema app !</Text>
                    <TouchableOpacity style={styles.btn} onPress={handleSignout}>
                        <Text style={{ color: "white", fontWeight: 800, fontSize: 16 }}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#50a5e1',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: 'white',
        paddingVertical: 30,
        textAlign: 'center'
    },
    emogi: {
        paddingVertical: 30,
        textAlign: 'center',
        fontSize: 20,

    }
})