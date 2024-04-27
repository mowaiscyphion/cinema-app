import Auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { default as Back } from 'react-native-vector-icons/AntDesign';
const dimensions = Dimensions.get('window')


const CheckOut = ({ navigation }) => {


    const [userObj, setUserObj] = useState({})
    const authUser = Auth().currentUser
    const route = useRoute()


    const getUser = async () => {
        const id = route.params?.userId ? route.params?.userId : authUser?.uid
        const user = await firestore().collection('Users').doc(id).get();
        const fullName = `${user?._data?.firstName} ${user?._data?.lastName}`
        setUserObj(prev => ({
            ...prev,
            ...route.params?.seatData,
            useremail: authUser?.email,
            username: fullName
        }))
    }

    const handleCheckOut = async () => {

        firestore()
            .collection('Ticket')
            .add(userObj)
            .then(() => {
                navigation.navigate('Ticket', { userObj })
                console.log("Ticket Created !")
            }).catch(err => {
                console.log(err)
                Alert.alert("Something Went Wrong", err?.message)
            })

    }


    useEffect(() => {

        getUser()

    }, [authUser])

    console.log({ userObj })
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#191e23' }}>
            <ScrollView>
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Back name='left' color={'white'} size={25} onPress={() => navigation.goBack()} />
                        <Text style={{ color: "white", fontSize: 20, fontWeight: 800, alignSelf: 'center', marginLeft: 100 }}>Checkout</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image resizeMode='contain' source={require('../images/Checkout.png')} style={{ width: dimensions.width * 0.9, height: 700 }} />
                    </View>
                    <TouchableOpacity onPress={handleCheckOut} style={styles.btn}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 800 }} >Pay Now    |    $99.8</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CheckOut

const styles = StyleSheet.create({
    btn: {
        marginVertical: 15,
        backgroundColor: '#50a5e1',
        borderRadius: 10,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center'
    }
})