import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { default as Back } from 'react-native-vector-icons/AntDesign';
import MyCheckBox from '../component/CheckBox';
import DropDown from '../component/DropDown';
import { Constant } from '../utils/constant';

const dimensions = Dimensions.get('window')

const SelectSeat = ({ navigation }) => {
    const [option, setOption] = useState("");
    const [date, setDate] = useState("");
    const [time, settime] = useState("");
    const [seat, setSeat] = useState("");
    const [isPartner, setIsPartner] = useState(false)
    const router = useRoute()



    const handleSubmit = () => {
        if (!option) {
            Alert.alert("Please select a cinema.");
            return;
        }
        if (!date) {
            Alert.alert("Please select a date.");
            return;
        }
        if (!time) {
            Alert.alert("Please select a time.");
            return;
        }
        if (!seat) {
            Alert.alert("Please select a seat.");
            return;
        }


        let seatData = {
            cinema: option,
            date: date,
            time: time,
            seat: seat,
            isPartner: isPartner,
            film: router?.params?.film
        }
        console.log(seatData)
        navigation.navigate('Checkout')
    }

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
                        data={Constant.dubaiCinemas}
                        placeHolderText={"Select Cinema"}
                        value={option}
                        setValue={setOption}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <DropDown
                            label={'Date'}
                            disable={false}
                            data={Constant.dates}
                            placeHolderText={"Select Date"}
                            value={date}
                            setValue={setDate}
                            dropdownStyle={{ width: 150 }}
                        />
                        <DropDown
                            label={'Time'}
                            disable={false}
                            data={Constant.times}
                            placeHolderText={"Select Time"}
                            value={time}
                            setValue={settime}
                            dropdownStyle={{ width: 150 }}
                        />
                    </View>
                    <DropDown
                        label={'Select Seat'}
                        disable={false}
                        data={Constant.seats}
                        placeHolderText={"Select Seat"}
                        value={seat}
                        setValue={setSeat}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <MyCheckBox isChecked={isPartner} onToggle={() => setIsPartner(prev => !prev)} />
                        <Text style={styles.secondary}>
                            I want to be a movie Partner.
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image resizeMode='contain' source={require('../images/seats.png')} style={{ width: dimensions.width * 0.9, height: 430 }} />
                    </View>
                    <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
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
    },
    secondary: {
        color: '#6e6e70',
        fontSize: 15
    },
})