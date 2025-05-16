import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CalendarBlank } from 'phosphor-react-native';

export default function FormFields() {
    const [date, setDate] = useState(new Date('2005-04-18'));
    const [showDatePicker, setShowDatePicker] = useState(false);
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
                    <Text style={styles.label}>Дата народження</Text>
                    <View style={styles.dateInputContainer}>
                        <TextInput
                            style={styles.input}
                            editable={false}
                            value={date.toLocaleDateString('uk-UA')}
                        />
                        <TouchableOpacity
                            onPress={() => setShowDatePicker(true)}
                            style={styles.dateIcon}
                        >
                            <CalendarBlank size={32} color="#170f2b" weight="thin" />
                        </TouchableOpacity>
                    </View>
                    {showDatePicker && (
                        <DateTimePicker
                            value={date}
                            mode="date"
                            display="default"
                            maximumDate={new Date()}
                            onChange={(event, selectedDate) => {
                                const currentDate = selectedDate || date;
                                setShowDatePicker(false);
                                setDate(currentDate);
                            }}
                        />
                    )}
                </View>

                <Text style={styles.contactsHeader}>Контакти</Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Телефон</Text>
                    <TextInput style={styles.input} defaultValue="+38099-876-5432" />
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
        marginBottom: 18,
    },
});