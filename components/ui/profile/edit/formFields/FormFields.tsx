import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import DateField from './DateField'

export default function FormFields() {
    const [phone, setPhone] = useState('');
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container}>

                {/* Form Fields */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Ім'я</Text>
                    <TextInput style={styles.input} defaultValue="Катерина" />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Прізвище</Text>
                    <TextInput style={styles.input} defaultValue="Коновалова" />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>По батькові</Text>
                    <TextInput style={styles.input} defaultValue="Володимирівна" />
                </View>

                <View style={styles.inputGroup}>
                    <DateField />
                </View>

                <Text style={styles.contactsHeader}>Контакти</Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Телефон</Text>
                    <TextInputMask
                        type={'custom'}
                        options={{
                            mask: '+99999-999-9999'
                        }}
                        value={phone}
                        onChangeText={text => setPhone(text)}
                        style={styles.input}
                        keyboardType="phone-pad"
                        placeholder="+38099-123-4567"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>e-mail</Text>
                    <TextInput style={styles.input} defaultValue="konnovalova@gmail.com" />
                </View>
            </ScrollView>
        </SafeAreaView >

    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    inputGroup: {
        marginTop: 16,
        marginHorizontal: 20,
    },
    label: {
        fontSize: 12,
        color: '#999999',
        fontFamily: 'Manrope-Regular',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 10,
        fontSize: 16,
        fontFamily: 'Manrope-Regular',
        color: '#170F2B',
    },
    dateInputContainer: {
        position: 'relative',
    },
    dateIcon: {
        position: 'absolute',
        right: 10,
        top: 5,
    },
    contactsHeader: {
        fontSize: 18,
        color: '#170F2B',
        fontFamily: 'Manrope-Regular',
        marginTop: 22,
        marginLeft: 20,
    },
});