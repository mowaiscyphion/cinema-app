import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native';
const dimension = Dimensions.get('window')





const Saved = () => {

    const [ticketData, setTicketData] = useState([])

    const getAllTickets = async () => {
        const tickets = await firestore().collection('Ticket').where('isPartner', '==', true).get();
        setTicketData(tickets.docs)
    }
    console.log(ticketData)

    const PrintTicket = ({ item }) => (
        <View style={styles.ticket}>
            <Text style={styles.test}>
                Ticket details
            </Text>
            <View style={styles.box}>
                <Text style={[styles.secondary, { color: 'black', fontWeight: 'bold' }]}>Name: </Text>
                <Text style={[styles.secondary]}>{item?.username}</Text>
            </View>
            <View style={styles.box}>
                <Text style={[styles.secondary, { color: 'black', fontWeight: 'bold' }]}>Email: </Text>
                <Text onPress={() => openLink(item?.useremail)} style={[styles.secondary, { color: '#0000FF', fontWeight: 'bold', textTransform: 'lowercase' }]}>{item?.useremail}</Text>
            </View>
            <View style={styles.box}>
                <Text style={[styles.secondary, { color: 'black', fontWeight: 'bold' }]}>Film: </Text>
                <Text style={[styles.secondary]}>{item?.film}</Text>
            </View>
            <View style={styles.box}>
                <Text style={[styles.secondary, { color: 'black', fontWeight: 'bold' }]}>Cinema: </Text>
                <Text style={[styles.secondary, { width: dimension.width * 0.5 }]}>{item?.cinema}</Text>
            </View>
            <View style={styles.box}>
                <Text style={[styles.secondary, { color: 'black', fontWeight: 'bold' }]}>Seat Number: </Text>
                <Text style={[styles.secondary]}>{item?.seat}</Text>
            </View>
            <View style={styles.box}>
                <Text style={[styles.secondary, { color: 'black', fontWeight: 'bold' }]}>Date: </Text>
                <Text style={[styles.secondary]}>{item?.date}</Text>
            </View>
            <View style={styles.box}>
                <Text style={[styles.secondary, { color: 'black', fontWeight: 'bold' }]}>Time: </Text>
                <Text style={[styles.secondary]}>{item?.time}</Text>
            </View>
            <View style={{ borderTopWidth: 1, borderTopColor: 'black', borderStyle: 'dashed', flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 }}>
                <View style={[styles.round, { transform: [{ translateY: -20 }, { translateX: -40 }] }]}></View>
                <View style={[styles.round, { transform: [{ translateY: -20 }, { translateX: 40 }] }]}></View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../images/Barcode.png')} style={{ width: '80%' }} />
            </View>
        </View>
    )

    const openLink = async (gmailUrl) => {
        Linking.canOpenURL(gmailUrl)
            .then((supported) => {
                if (supported) {
                    return Linking.openURL(gmailUrl);
                } else {
                    // Fallback to opening the email address in a web browser
                    const fallbackUrl = `mailto:${gmailUrl}`;
                    return Linking.openURL(fallbackUrl);
                }
            })
            .catch((err) => console.error('An error occurred', err));
    }

    useEffect(() => {
        getAllTickets()
    }, [])


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#191e23' }}>
            <View style={styles.view}>
                <FlatList
                    data={ticketData}
                    renderItem={({ item }) => <PrintTicket item={item?._data} />}
                    keyExtractor={(item, index) => index}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.continer}
                />
            </View>
        </SafeAreaView>
    )
}

export default Saved

const styles = StyleSheet.create({
    view: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: dimension.width,
        height: dimension.height * 0.9
    },
    continer: {
        gap: 15
    },
    ticket: {
        width: dimension.width * 0.8,
        // height: dimension.height * 0.7,
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 30,
        padding: 20
    },
    secondary: {
        color: '#6e6e70',
        fontSize: 15,
        textTransform: 'capitalize'
    },
    test: {
        color: "black",
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginVertical: 20
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 5,
        marginVertical: 10
    },
    round: {
        width: 40,
        height: 40,
        backgroundColor: '#191e23',
        borderRadius: 20,
    }
})