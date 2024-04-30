import React from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";

const MyModal = ({
    modalVisible,
    setModalVisible,
    children,
    modalStyles
}) => {
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <View style={styles.container}>
            <Modal
                transparent={true}
                animationType="fade"
                visible={modalVisible}
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainer}>
                    <View style={[styles.modalContent, { ...modalStyles }]}>
                        {children}
                    </View>
                    {/* Backdrop */}
                    <TouchableOpacity style={styles.backdrop} onPress={toggleModal} />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    backdrop: {
        position: "absolute",
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black
    },

});

export default MyModal;
