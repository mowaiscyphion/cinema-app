import React from 'react'
import { Dimensions, FlatList, Image, Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const dimension = Dimensions.get('window')


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
            <Text onPress={() => openLink(item?.useremail)} style={[styles.secondary, { color: '#0000FF', fontWeight: 'bold' }]}>{item?.useremail}</Text>
        </View>
        <View style={styles.box}>
            <Text style={[styles.secondary, { color: 'black', fontWeight: 'bold' }]}>Cinema: </Text>
            <Text style={[styles.secondary]}>{item?.cinema}</Text>
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


const Saved = () => {

    const users = [
        {
            id: 1,
            cinema: "reel_marina",
            date: "2024-04-26",
            film: "Scream",
            isPartner: true,
            seat: "C10",
            time: "18:00",
            useremail: "jawad@gmail.com",
            username: "jawad ali"
        },
        {
            id: 2,
            cinema: "reel_marina",
            date: "2024-04-26",
            film: "Scream",
            isPartner: true,
            seat: "C10",
            time: "18:00",
            useremail: "jawad@gmail.com",
            username: "jawad ali"
        },
        {
            id: 3,
            cinema: "reel_marina",
            date: "2024-04-26",
            film: "Scream",
            isPartner: true,
            seat: "C10",
            time: "18:00",
            useremail: "jawad@gmail.com",
            username: "jawad ali"
        },
        {
            id: 4,
            cinema: "reel_marina",
            date: "2024-04-26",
            film: "Scream",
            isPartner: true,
            seat: "C10",
            time: "18:00",
            useremail: "jawad@gmail.com",
            username: "jawad ali"
        },
    ]

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


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#191e23' }}>
            <View style={styles.view}>
                <FlatList
                    data={users}
                    renderItem={({ item }) => <PrintTicket item={item} />}
                    keyExtractor={item => item.id}
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
        height: dimension.height * 0.7,
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 30,
        padding: 20
    },
    secondary: {
        color: '#6e6e70',
        fontSize: 15,
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