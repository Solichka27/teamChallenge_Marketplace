import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BackArrow() {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <View style={styles.backIconCircle}>
                    ‹
                </View>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    backButton: {
        marginRight: 20,
    },
    backIconCircle: {
        backgroundColor: '#AC94E8',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

});