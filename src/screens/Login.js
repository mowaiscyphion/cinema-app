import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import MyCheckBox from '../component/CheckBox'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLog, setIsLog] = useState(false)


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#191e23' }}>
            <View>
                <Text>
                    Login
                </Text>
                <TextInput
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <MyCheckBox isChecked={isLog} onToggle={() => setIsLog(prev => !prev)} />
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({})