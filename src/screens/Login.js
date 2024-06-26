import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import MyCheckBox from '../component/CheckBox'
import faceBook from '../images/Facebook.png'
import google from '../images/Google.png'
import insta from '../images/Instagram.png'
import twitter from '../images/Twitter.png'



const VerifyLogin = async (email, password) => {
    try {
        const users = await AsyncStorage.getItem('users');
        if (users !== null) {
            const parsedUsers = JSON.parse(users);
            const foundUser = parsedUsers.find(user => user.email === email && user.password === password);
            if (foundUser) {
                console.log('Login successful!');
                return true;
            } else {
                console.log('Invalid email or password.');
                return false;
            }
        } else {
            console.log('No user data found.');
            return false;
        }
    } catch (error) {
        console.error('Error verifying login:', error);
        return false;
    }
};

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLog, setIsLog] = useState(false)


    const handleNavigate = () => {
        navigation.navigate('Signup')
    }

    const handleLogin = async () => {
        const isLoggedIn = await VerifyLogin(email, password);
        if (isLoggedIn) {
            // Navigate to the next screen or perform any other action
            navigation.navigate('tabs')
            // Alert.alert('Login Successful!');
        } else {
            Alert.alert('Invalid email or password. Please try again.');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#191e23' }}>
            <ScrollView>
                <View style={{ padding: 50 }}>
                    <Text style={[styles.heading]}>
                        Login
                    </Text>
                    <TextInput
                        placeholder='Email Address'
                        value={email}
                        inputMode='email'
                        onChangeText={text => setEmail(text)}
                        style={[styles.input]}
                    />
                    <TextInput
                        secureTextEntry
                        placeholder='Password'
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={[styles.input]}
                    />
                    <View style={styles.box}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <MyCheckBox isChecked={isLog} onToggle={() => setIsLog(prev => !prev)} />
                            <Text style={styles.secondary}>Keep me logged in</Text>
                        </View>
                        <Text style={styles.forget}>Forget password?</Text>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                        <Text style={{ color: "white", fontWeight: 800, fontSize: 16 }}>Login</Text>
                    </TouchableOpacity>
                    <View style={[styles.box, { justifyContent: 'flex-start', gap: 10 }]}>
                        <Text style={styles.secondary}>Don't have an account?</Text>
                        <Text style={styles.forget} onPress={handleNavigate}>Sign up</Text>
                    </View>
                    <Text style={[styles.secondary, { textAlign: 'center' }]}>------------------------- Or continue with -------------------------</Text>
                    <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'center', marginVertical: 25 }}>
                        <Image source={google} />
                        <Image source={faceBook} />
                        <Image source={insta} />
                        <Image source={twitter} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    heading: {
        marginTop: 80,
        color: 'white',
        fontSize: 35,
        fontWeight: 800
    },
    input: {
        marginTop: 25,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 40,
        paddingHorizontal: 20
    },
    forget: {
        color: '#50a5e1'
    },
    secondary: {
        color: '#6e6e70'
    },
    box: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#50a5e1',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})