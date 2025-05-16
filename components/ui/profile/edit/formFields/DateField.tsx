import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Modal } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CalendarBlank } from 'phosphor-react-native';

export default function DataFields() {
    const [date, setDate] = useState(new Date(2005, 3, 18));
    const [textDate, setTextDate] = useState(formatDate(date));
    const [showDatePicker, setShowDatePicker] = useState(false);

    function formatDate(date) {
        return date.toLocaleDateString('uk-UA');
    }

    function parseDateFromString(str) {
        const parts = str.split('.');
        if (parts.length === 3) {
            const [day, month, year] = parts.map(Number);
            const parsed = new Date(year, month - 1, day);
            if (!isNaN(parsed)) return parsed;
        }
        return null;
    }

    const onChange = (event, selectedDate) => {
        if (event.type !== 'dismissed' && selectedDate) {
            setDate(selectedDate);
            setTextDate(formatDate(selectedDate));
        }
        setShowDatePicker(false);
    };

    return (
        <View>
            <Text style={styles.label}>Дата народження</Text>
            <View style={styles.dateInputContainer}>
                <TextInputMask
                    type={'datetime'}
                    options={{ format: 'DD.MM.YYYY' }}
                    style={styles.input}
                    value={textDate}
                    onChangeText={(formatted) => {
                        setTextDate(formatted);
                        const parsed = parseDateFromString(formatted);
                        if (parsed) setDate(parsed);
                    }}
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    onPress={() => setShowDatePicker(true)}
                    style={styles.dateIcon}
                >
                    <CalendarBlank size={32} color="#170f2b" weight="thin" />
                </TouchableOpacity>
            </View>

            {showDatePicker && Platform.OS === 'android' && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    maximumDate={new Date()}
                    onChange={onChange}
                />
            )}

            {showDatePicker && Platform.OS === 'ios' && (
                <Modal transparent={true} animationType="slide">
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <DateTimePicker
                                value={date}
                                mode="date"
                                display="spinner"
                                maximumDate={new Date()}
                                onChange={onChange}
                            />
                            <TouchableOpacity
                                onPress={() => setShowDatePicker(false)}
                                style={styles.closeButton}
                            >
                                <Text style={styles.closeButtonText}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
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
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: '#170F2B',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});
