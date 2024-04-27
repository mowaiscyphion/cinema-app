import Auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Search from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Constant } from '../utils/constant';


const dimensions = Dimensions.get('window')
const Home = ({ navigation }) => {
    const [srch, setSrch] = useState('')
    const [userName, setUserName] = useState('')
    const authUser = Auth().currentUser?.uid
    const route = useRoute()


    const handleScreenChange = (id, arr) => {
        navigation.navigate('Detail', { id: id, arrName: arr })
    }


    const Item = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={() => handleScreenChange(item.id, "DATA")} style={styles.item}>
                <Image resizeMode='cover' source={item.img} style={{ width: dimensions.width * 0.8, height: 180, borderRadius: 15 }} />
                <Text style={[styles.test, { color: 'white', paddingVertical: 5 }]}>{item.title}</Text>
                <Text style={[styles.description, { color: '#6e6e70' }]}>{item.date}</Text>
            </TouchableOpacity>
        );
    };

    const Item2 = ({ item }) => {
        return (
            <View style={[styles.item, { flexDirection: 'row', alignItems: 'center', marginVertical: 10, gap: 10 }]}>
                <View style={{ borderColor: '#50a5e1', borderWidth: 1, borderRadius: 10, padding: 10 }}>
                    <Image resizeMode='contain' source={require('../images/film.png')} style={{ width: 40, height: 40 }} />
                </View>
                <View style={{ padding: 5 }}>

                    <Text style={[{ color: '#50a5e1', paddingVertical: 5 }]}>{(Math.random() * 10).toFixed(1)} Kilometers</Text>
                    <Text style={{ color: 'white' }}>{item?.title}</Text>
                    <Text style={[styles.description, { color: '#6e6e70' }]}>Closed 10:00 PM</Text>
                </View>
            </View>
        );
    };

    const getUser = async () => {
        const id = route.params?.userId ? route.params?.userId : authUser
        const user = await firestore().collection('Users').doc(id).get();
        const fullName = `${user?._data?.firstName} ${user?._data?.lastName}`
        setUserName(fullName)
    }

    useEffect(() => {

        getUser()

    }, [route.params?.userId])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#191e23' }}>
            <ScrollView>
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={styles.secondary}>Welcome,</Text>
                            <Text style={[styles.test, { fontWeight: '800' }]}>{userName.toUpperCase() || "Back"}</Text>
                        </View>
                        <Entypo name='user' color={'#6e6e70'} size={25} style={styles.iconProfile} />
                    </View>
                    <View style={styles.srchbar}>
                        <Search name='search1' color={'#6e6e70'} size={25} />
                        <TextInput style={styles.input} value={srch} onChangeText={text => setSrch(text)} placeholder='Search your favourite movie' placeholderTextColor="#6e6e70" />
                    </View>
                    <Text style={styles.test}>
                        Coming Soon
                    </Text>
                    <View>

                        <FlatList
                            data={Constant.DATA}
                            renderItem={({ item }) => <Item item={item} />}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.continer}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
                        <Text style={styles.test}>
                            Cinema Near You
                        </Text>
                        <Text style={{ color: '#6e6e70' }}>
                            See all
                        </Text>
                    </View>
                    <View >
                        {Constant.DATA2.map((item, index) => (
                            <Item2 key={index} item={item} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    test: {
        color: "white",
        fontSize: 18,
    },
    secondary: {
        color: '#6e6e70',
        fontSize: 15
    },
    iconProfile: {
        borderRadius: 15,
        borderColor: '#6e6e70',
        borderWidth: 1,
        width: "auto",
        padding: 10
    },
    srchbar: {
        marginVertical: 25,
        backgroundColor: '#6e6e7060',
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    input: {
        // backgroundColor: '',
        width: '90%',
        height: 40,
        color: '#6e6e70'
    },
    continer: {
        marginVertical: 15,
        gap: 10
    },
    item: {
        marginHorizontal: 5
    }
})