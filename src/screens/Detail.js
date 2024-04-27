import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { default as Back, default as Search } from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { Constant } from '../utils/constant';


const dimension = Dimensions.get('window')

const Detail = ({ navigation }) => {
    const router = useRoute()

    const film = Constant[router?.params?.arrName].filter((item) => item.id == router?.params?.id)[0]

    const CardTwo = ({ item }) => {
        return (
            <View style={{ gap: 10, marginRight: 20 }}>
                <Image resizeMode='cover' source={film?.img} style={{ height: 350, width: dimension.width * 0.55, borderRadius: 15 }} />

            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#191e23' }}>
            <ScrollView>
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Back name='left' color={'white'} size={25} />
                        <Text style={{ color: "white", fontSize: 20, fontWeight: 800 }}>Details Movie</Text>
                        <FontAwesome6 name="bookmark" size={25} color={'white'} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <FlatList data={["", "", ""]} renderItem={({ item }) => <CardTwo item={item} />} horizontal />
                    </View>
                    <Text style={styles.test}>
                        {film.title}
                    </Text>
                    <Text style={styles.secondary}>
                        {film?.des.slice(0, 35)}  |  <Search name='star' color={'#ffa032'} size={15} /> 4.9
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginVertical: 15, gap: 10 }}>
                        <Text style={[styles.secondary, { padding: 5, backgroundColor: '#6e6e7040', borderRadius: 10, fontSize: 14 }]}>Action</Text>
                        <Text style={[styles.secondary, { padding: 5, backgroundColor: '#6e6e7040', borderRadius: 10, fontSize: 14 }]}>Fiction Fantasy</Text>
                        <Text style={[styles.secondary, { padding: 5, backgroundColor: '#6e6e7040', borderRadius: 10, fontSize: 14 }]}>02h 43m</Text>
                    </View>
                    <Text style={styles.test}>
                        Synopsis
                    </Text>
                    <Text style={styles.secondary}>
                        {film?.des.slice(0, 120)} <Text style={[styles.secondary, { color: '#50a5e1' }]}>Read More</Text>
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SelectSeat')} style={styles.btn}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 800 }} >Book Ticket</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Detail

const styles = StyleSheet.create({
    test: {
        color: "white",
        fontSize: 18,
        paddingVertical: 10
    },
    secondary: {
        color: '#6e6e70',
        fontSize: 15
    },
    btn: {
        marginVertical: 15,
        backgroundColor: '#50a5e1',
        borderRadius: 10,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center'
    }
})