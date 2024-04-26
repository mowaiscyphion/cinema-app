import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Search from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';


const Home = () => {
    const [srch, setSrch] = useState('')


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#191e23' }}>
            <ScrollView>
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={styles.secondary}>Welcome,</Text>
                            <Text style={styles.test}>Ahmed Hassan</Text>
                        </View>
                        <Entypo name='user' color={'#6e6e70'} size={25} style={styles.iconProfile} />
                    </View>
                    <View style={styles.srchbar}>
                        <Search name='search1' color={'#6e6e70'} size={25} />
                        <TextInput style={styles.input} value={srch} onChangeText={text => setSrch(text)} placeholder='Search your favourite movie' />
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
        marginVertical: 15,
        backgroundColor: '#6e6e7060',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    input: {
        // backgroundColor: '',
        width: '90%',
        height: 40
    }
})