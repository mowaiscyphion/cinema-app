import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { default as Back } from 'react-native-vector-icons/AntDesign';
import DropDown from '../component/DropDown';

const dimensions = Dimensions.get('window')

const SelectSeat = ({ navigation }) => {
    const [option, setOption] = useState("");
    const [date, setDate] = useState("");
    const [time, settime] = useState("");
    const data = [
        { name: "VOX Cinemas", value: "1" },
        { name: "Reel Cinemas", value: "2" },
        { name: "Novo Cinemas", value: "3" },
        { name: "Roxy Cinemas", value: "4" },
        { name: "Cine Royal Cinema", value: "5" },
        { name: "CinemaCity", value: "6" },
        { name: "Star Cinemas", value: "7" },
        { name: "Oscar Cinema", value: "8" },
    ];

    const dates = [
        { name: "April 26, 2024", value: "2024-04-26" },
        { name: "April 27, 2024", value: "2024-04-27" },
        { name: "April 28, 2024", value: "2024-04-28" },
        { name: "April 29, 2024", value: "2024-04-29" },
        { name: "April 30, 2024", value: "2024-04-30" },
    ];

    const times = [
        { name: "10:00 AM", value: "10:00" },
        { name: "12:00 PM", value: "12:00" },
        { name: "2:00 PM", value: "14:00" },
        { name: "4:00 PM", value: "16:00" },
        { name: "6:00 PM", value: "18:00" },
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#191e23' }}>
            <ScrollView>
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Back name='left' color={'white'} size={25} />
                        <Text style={{ color: "white", fontSize: 20, fontWeight: 800, alignSelf: 'center', marginLeft: 100 }}>Select Seats</Text>
                    </View>
                    <DropDown
                        label={'Cinema'}
                        disable={false}
                        data={data}
                        // placeHolderText={"Course"}
                        value={option}
                        setValue={setOption}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <DropDown
                            label={'Date'}
                            disable={false}
                            data={dates}
                            // placeHolderText={"Course"}
                            value={date}
                            setValue={setDate}
                            dropdownStyle={{ width: 150 }}
                        />
                        <DropDown
                            label={'Time'}
                            disable={false}
                            data={times}
                            // placeHolderText={"Course"}
                            value={time}
                            setValue={settime}
                            dropdownStyle={{ width: 150 }}
                        />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                        <Image resizeMode='contain' source={require('../images/seats.png')} style={{ width: dimensions.width * 0.9, height: 430 }} />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={styles.btn}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 800 }} >Checkout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default SelectSeat

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