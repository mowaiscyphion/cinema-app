import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { default as Back, default as Search } from 'react-native-vector-icons/AntDesign';
import { Constant } from '../utils/constant';

const Explore = ({ navigation }) => {


    const handleScreenChange = (id, arr) => {
        navigation.navigate('Detail', { id: id, arrName: arr })
    }

    const Card = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => handleScreenChange(item.id, "DATA")} style={{ gap: 10, marginRight: 20 }}>
                <Image resizeMode='cover' source={item.img} style={{ height: 250, width: 200, borderRadius: 15 }} />
                <Text style={{ color: "white", fontSize: 20, fontWeight: 700, width: 200 }}>{item?.title}</Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <Search name='star' color={'#ffa032'} size={20} />
                    <Search name='star' color={'#ffa032'} size={20} />
                    <Search name='star' color={'#ffa032'} size={20} />
                    <Search name='star' color={'#ffa032'} size={20} />
                    <Search name='star' color={'#ffa032'} size={20} />

                </View>
            </TouchableOpacity>
        )
    }

    const CardTwo = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => handleScreenChange(item.id, "DATA2")} style={{ gap: 10, marginRight: 20 }}>
                <Image source={item?.img} style={{ height: 160, width: 130, borderRadius: 15 }} />

            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#191e23' }}>
            <ScrollView>
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Back name='left' color={'white'} size={25} />
                        <Text style={{ color: "white", fontSize: 20, fontWeight: 800 }}>Explore Movie</Text>
                        <Search name='search1' color={'white'} size={25} />
                    </View>
                    <View style={{ backgroundColor: '#6e6e7060', flexDirection: 'row', padding: 10, marginVertical: 15, borderRadius: 10 }}>
                        <TouchableOpacity style={{ width: "50%", flex: 1, backgroundColor: "#50a5e1", padding: 10, borderRadius: 10 }}>
                            <Text style={{ color: "white", fontSize: 16, textAlign: 'center', fontWeight: 600 }}>Now Showing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: "50%", flex: 1, backgroundColor: "transparent", padding: 10, borderRadius: 10 }}>
                            <Text style={{ color: "#6e6e70", fontSize: 16, textAlign: 'center' }}>Upcoming</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <Text style={{ color: "white", fontSize: 22, fontWeight: 800 }}>Top Movies</Text>
                        <Text style={{ color: "#6e6e70", fontSize: 16, fontWeight: 800 }}>See more</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <FlatList data={Constant.DATA} renderItem={({ item }) => <Card item={item} />} horizontal />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <Text style={{ color: "white", fontSize: 22, fontWeight: 800 }}>Recommended</Text>
                        <Text style={{ color: "#6e6e70", fontSize: 16, fontWeight: 800 }}>See more</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <FlatList data={Constant.DATA2} renderItem={({ item }) => <CardTwo item={item} />} horizontal />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Explore

const styles = StyleSheet.create({})