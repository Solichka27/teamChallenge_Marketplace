import React from 'react';
import { Pressable, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PencilSimple } from 'phosphor-react-native';
import { Link } from "expo-router";


export default function AddressCard({ title, address, logo, active, onPress, switchValue, onSwitchToggle }) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={[styles.container, active && styles.activeBorder]}>
            <View style={styles.topRow}>
                <View style={styles.logoTitle}>
                    {logo}
                    <Text style={styles.title}>{title}</Text>
                </View>
                <TouchableOpacity onPress={onSwitchToggle} style={[styles.switch, switchValue && styles.switchActive]}>
                    <View style={[styles.switchCircle, switchValue && styles.switchCircleActive]} />
                </TouchableOpacity>
            </View>

            <View style={styles.bottomRow}>
                <Text numberOfLines={3} style={styles.addressText}>{address}</Text>
               <Link href="/(tabs)/profile/addresses/ChangeAddress" asChild>
                    <Pressable>
                        <PencilSimple size={24} color="#170F2B" weight="light" style={styles.pencilIcon} />
                    </Pressable>
                </Link>

            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 135,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        marginTop: 24,
        marginBottom: 16,
        paddingHorizontal: 10,
        paddingTop: 14,
        paddingBottom: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 4,
    },
    activeBorder: {
        borderWidth: 1,
        borderColor: '#8E6CEF',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Outfit-Bold',
        fontSize: 16,
        color: '#170F2B',
        marginLeft: 18,
    },
    switch: {
        width: 29,
        height: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#8E6CEF',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        paddingHorizontal: 3,
    },
    switchActive: {
        backgroundColor: '#8E6CEF',
    },
    switchCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#8E6CEF',
        alignSelf: 'flex-start',
    },
    switchCircleActive: {
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-end',
    },
    bottomRow: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    addressText: {
        fontFamily: 'Manrope-Regular',
        fontSize: 16,
        color: '#170F2B',
        width: '75%',
    },
    pencilIcon: {
        marginRight: 10,
        marginTop: 14,
    },
});
