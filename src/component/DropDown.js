import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const screenDimensions = Dimensions.get('window')

const DropDown = (props) => {
    const {
        data,
        placeHolderText,
        label,
        value,
        setValue,
        disable,
        dropdownStyle,
        search = false
    } = props;
    const [isFocus, setIsFocus] = useState(false);


    return (
        <View style={styles.container}>
            {label ? <Text
                style={[
                    styles.label,
                    // isFocus || value ? { color: Color.primary } : { color: Color.text },
                ]}
            >
                {label}
            </Text> : null}
            <Dropdown
                {...props}
                disable={disable}
                itemTextStyle={styles.itemTextStyle}
                containerStyle={styles.itemsContainer}
                style={[
                    styles.dropdown,
                    { ...dropdownStyle },
                    // isFocus || value
                    //     ? { borderColor: Color.primary }
                    //     : { borderColor: '#6e6e70' },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={[styles.selectedTextStyle]}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search={search}
                maxHeight={screenDimensions.height * 0.3}
                labelField="name"
                valueField="value"
                placeholder={!isFocus ? placeHolderText : "..."}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
                activeColor={'#191e23'}
            />
        </View>
    );
};

export default DropDown;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    dropdown: {
        height: screenDimensions.fontScale * 40,
        borderColor: '#6e6e70',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 8,
        backgroundColor: '#191e23',
        color: '#6e6e70',
    },
    icon: {
        marginRight: 5,
    },
    label: {
        fontSize: 16,
        color: '#6e6e70',
        marginBottom: 10
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#6e6e70',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#6e6e70',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: screenDimensions.fontScale * 40,
        fontSize: 16,
    },
    itemsContainer: {
        borderRadius: 8,
        marginTop: 5,
        backgroundColor: '#191e23'
    },
    itemTextStyle: {
        fontSize: 14,
        color: '#6e6e70',
    },
});
