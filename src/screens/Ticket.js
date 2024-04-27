import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { default as Back } from 'react-native-vector-icons/AntDesign';
const dimensions = Dimensions.get('window')

const Ticket = ({ navigation }) => {
    const route = useRoute()
    let ticketData = route?.params?.userObj


    function generateRandomNumber(length) {
        let result = '';
        const characters = '0123456789';
        const charactersLength = characters.length;

        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    const OrderNo = generateRandomNumber(7);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#191e23' }}>
            <ScrollView>
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Back name='left' color={'white'} size={25} onPress={() => navigation.goBack()} />
                        <Text style={{ color: "white", fontSize: 20, fontWeight: 800, alignSelf: 'center', marginLeft: 100 }}>Select Seats</Text>
                    </View>
                    <Text style={styles.test}>Instruction</Text>
                    <Text style={styles.secondary}>
                        Come to the cinema, show and scan the barcode to the space provided.
                        Continue to comply with health protocols.
                    </Text>
                    <View style={styles.ticket}>
                        <View style={{ paddingHorizontal: 20, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={[styles.secondary, { color: 'black', fontWeight: 800, width: '60%' }]}>Film:{ticketData?.film}</Text>
                            <Text style={[styles.secondary, { color: 'red', width: '40%' }]}>e-ticket</Text>
                        </View>
                        <View style={{ paddingHorizontal: 20, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 15 }}>
                            <View style={{ width: '60%' }}>
                                <Text style={[styles.secondary, { fontWeight: 600 }]}>Date</Text>
                                <Text style={[styles.secondary, { fontWeight: 800, color: 'black' }]}>{ticketData?.date}</Text>
                            </View>
                            <View style={{ width: '40%' }}>
                                <Text style={[styles.secondary, { fontWeight: 600 }]}>Seats</Text>
                                <Text style={[styles.secondary, { fontWeight: 800, color: 'black' }]}>{ticketData?.seat}</Text>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 15 }}>
                            <View style={{ width: '60%' }}>
                                <Text style={[styles.secondary, { fontWeight: 600 }]}>Location</Text>
                                <Text style={[styles.secondary, { fontWeight: 800, color: 'black' }]}>{ticketData?.cinema}</Text>
                            </View>
                            <View style={{ width: '40%' }}>
                                <Text style={[styles.secondary, { fontWeight: 600 }]}>Time</Text>
                                <Text style={[styles.secondary, { fontWeight: 800, color: 'black' }]}>{ticketData?.time}</Text>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 15 }}>
                            <View style={{ width: '60%' }}>
                                <Text style={[styles.secondary, { fontWeight: 600 }]}>Payment</Text>
                                <Text style={[styles.secondary, { fontWeight: 800, color: 'black' }]}>Successful</Text>
                            </View>
                            <View style={{ width: '40%' }}>
                                <Text style={[styles.secondary, { fontWeight: 600 }]}>Order</Text>
                                <Text style={[styles.secondary, { fontWeight: 800, color: 'black' }]}>{OrderNo}</Text>
                            </View>
                        </View>
                        <View style={{ borderTopWidth: 1, borderTopColor: 'black', borderStyle: 'dashed', flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 }}>
                            <View style={[styles.round, { transform: [{ translateY: -20 }, { translateX: -20 }] }]}></View>
                            <View style={[styles.round, { transform: [{ translateY: -20 }, { translateX: 20 }] }]}></View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                            <Image source={require('../images/Barcode.png')} style={{ width: '80%' }} />
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('tabs', {
                        screen: 'Home'
                    })} style={styles.btn}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 800 }} >Download E-Ticket</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Ticket

const styles = StyleSheet.create({
    btn: {
        marginVertical: 15,
        backgroundColor: '#50a5e1',
        borderRadius: 10,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondary: {
        color: '#6e6e70',
        fontSize: 15,
    },
    test: {
        color: "white",
        fontSize: 18,
        marginTop: 25,
        marginVertical: 15
    },
    ticket: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 30,
        paddingVertical: 10
    },
    round: {
        width: 40,
        height: 40,
        backgroundColor: '#191e23',
        borderRadius: 20,
    }
})