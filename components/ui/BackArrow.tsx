import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CaretLeft } from 'phosphor-react-native';

export default function BackArrow() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.backArrowWrapper} onPress={() => navigation.goBack()}>
            <View style={styles.backIconCircle}>
                <CaretLeft size={18} color="#ffffff" weight="bold" />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    backArrowWrapper: {
        position: 'absolute',
        left: 20,
        top: 20,
        zIndex: 1,
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
