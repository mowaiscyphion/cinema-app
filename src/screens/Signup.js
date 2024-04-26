import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import MyCheckBox from '../component/CheckBox'
import faceBook from '../images/Facebook.png'
import google from '../images/Google.png'
import insta from '../images/Instagram.png'
import twitter from '../images/Twitter.png'

const Signup = ({ navigation }) => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLog, setIsLog] = useState(false)


    const handleNavigate = () => {
        navigation.navigate('Login')

    }


    const SaveUserData = async () => {
        try {
            if (!password || !email) {
                !password && Alert.alert("Password is required")
                !email && Alert.alert("Email is required")
                return
            } else {
                let userData = {
                    firstname, lastname, password, email
                }
                let users = await AsyncStorage.getItem('users');
                if (users) {
                    users = JSON.parse(users);
                    users.push(userData);
                } else {
                    users = [userData];
                }
                await AsyncStorage.setItem('users', JSON.stringify(users));
                setEmail('')
                setPassword('')
                setFirstname('')
                setLastname('')
            }
            navigation.navigate('Login')

            console.log('User data saved successfully!');
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    };



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#191e23' }}>
            <ScrollView>
                <View style={{ padding: 50 }}>
                    <Text style={[styles.heading]}>
                        Sign Up
                    </Text>
                    <TextInput
                        placeholder='First Name'
                        value={firstname}
                        onChangeText={text => setFirstname(text)}
                        style={[styles.input]}
                    />
                    <TextInput
                        placeholder='LastName'
                        value={lastname}
                        onChangeText={text => setLastname(text)}
                        style={[styles.input]}
                    />
                    <TextInput
                        placeholder='Email Address'
                        value={email}
                        inputMode='email'
                        onChangeText={text => setEmail(text)}
                        style={[styles.input]}
                    />
                    <TextInput
                        secureTextEntry
                        placeholder='Create Password'
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={[styles.input]}
                    />
                    <View style={[styles.box, { justifyContent: 'flex-start' }]}>
                        <MyCheckBox isChecked={isLog} onToggle={() => setIsLog(prev => !prev)} />
                        <Text style={styles.secondary}>I agree to the terms and privacy policy</Text>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={SaveUserData}>
                        <Text style={{ color: "white", fontWeight: 800, fontSize: 16 }}>Create an account</Text>
                    </TouchableOpacity>
                    <View style={[styles.box, { justifyContent: 'flex-start', gap: 10 }]}>
                        <Text style={styles.secondary}>Already a member?</Text>
                        <Text style={styles.forget} onPress={handleNavigate}>Login</Text>
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

export default Signup

const styles = StyleSheet.create({
    heading: {
        marginTop: 10,
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