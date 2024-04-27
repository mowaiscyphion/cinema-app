import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { default as Back } from 'react-native-vector-icons/AntDesign';
const dimensions = Dimensions.get('window')

const Ticket = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#191e23' }}>
            <ScrollView>
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Back name='left' color={'white'} size={25} />
                        <Text style={{ color: "white", fontSize: 20, fontWeight: 800, alignSelf: 'center', marginLeft: 100 }}>Select Seats</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image resizeMode='contain' source={require('../images/Ticket.png')} style={{ width: dimensions.width * 0.9, height: 700 }} />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Ticket')} style={styles.btn}>
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
    }
})