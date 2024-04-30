import auth from '@react-native-firebase/auth'
import React, { useState } from 'react'
import { Alert, Dimensions, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import MyCheckBox from '../component/CheckBox'
import MyModal from '../component/MyModal'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLog, setIsLog] = useState(false)
    const [open, setOpen] = useState(false)

    const renderModalContent = () => (
        <View style={[styles.modalContainer, { gap: 25 }]}>
            <Text style={[styles.heading, { marginTop: 10 }]}>
                Forget Password
            </Text>
            <Text style={[styles.secondary, { fontSize: 18, color: 'white' }]}>
                Email: <Text style={{ color: '#50a5e1' }} onPress={() => openLink('d3bud901@gmail.com', 'email')}>d3bud901@gmail.com</Text> {'\n'}{'\n'}
                Contact : <Text style={{ color: '#50a5e1' }} onPress={() => openLink('0561199851', 'telephone')}>0561199851</Text>
            </Text>
        </View>
    )



    const openLink = async (url, type) => {
        let supported;
        let fallbackUrl;

        switch (type) {
            case 'email':
                supported = await Linking.canOpenURL(`mailto:${url}`);
                fallbackUrl = `mailto:${url}`;
                break;
            case 'telephone':
                supported = await Linking.canOpenURL(`tel:${url}`);
                fallbackUrl = `tel:${url}`;
                break;
            default:
                console.error('Unsupported link type');
                return;
        }

        if (supported) {
            await Linking.openURL(`tel:${url}`);
        } else {
            console.warn(`Cannot open ${type} link, falling back to browser`);
            await Linking.openURL(fallbackUrl);
        }
    };


    const handleNavigate = () => {
        navigation.navigate('Signup')
    }

    const handleLogin = async () => {
        if (!password || !email) {
            !password && Alert.alert("Password is required")
            !email && Alert.alert("Email is required")
            return
        } else {
            await auth().signInWithEmailAndPassword(email, password).then(res => {
                navigation.navigate('tabs', {
                    screen: 'Home',
                    params: { userId: res?.user?.uid },
                })
            }).catch(err => {
                Alert.alert(err.message)
            })
        }

    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#191e23' }}>
            <ScrollView>
                <MyModal
                    modalVisible={open}
                    setModalVisible={setOpen}
                    children={renderModalContent()}
                />
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
                        <Text style={styles.forget} onPress={() => setOpen(true)}>Forget password?</Text>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                        <Text style={{ color: "white", fontWeight: 800, fontSize: 16 }}>Login</Text>
                    </TouchableOpacity>
                    <View style={[styles.box, { justifyContent: 'flex-start', gap: 10 }]}>
                        <Text style={styles.secondary}>Don't have an account?</Text>
                        <Text style={styles.forget} onPress={handleNavigate}>Sign up</Text>
                    </View>
                    {/* <Text style={[styles.secondary, { textAlign: 'center' }]}> Or continue with </Text>
                    <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'center', marginVertical: 25 }}>
                        <Image source={google} />
                        <Image source={faceBook} />
                        <Image source={insta} />
                        <Image source={twitter} />
                    </View> */}
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
    },
    modalContainer: {
        padding: 20,
        backgroundColor: '#191e23',
        width: Dimensions.get('window').width * 0.8,
        height: 200,
        zIndex: 1,
        borderRadius: 10,
    }
})