import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Camera, Image } from 'phosphor-react-native';

export default function EditPhoto() {
    return (

        <View>
            {/* Profile Image Section */}
            <View style={styles.photoSection}>
                <View style={styles.profileCircle}>
                    <Text style={styles.profileInitials}>КК</Text>
                </View>
                <Text style={styles.photoLabel}>Фото профілю</Text>
            </View>

            {/* Photo Buttons */}
            <View style={styles.photoButtons}>
                <TouchableOpacity
                    style={styles.photoButton}
                    onPress={() => launchCamera({ mediaType: 'photo' })}
                >
                    <Camera size={32} color="#8e6cef" weight="thin" />
                    <Text style={styles.photoButtonText}>Зробити фото</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.photoButton}
                    onPress={() => launchImageLibrary({ mediaType: 'photo' })}
                >
                    <Image size={32} color="#8e6cef" weight="thin" />
                    <Text style={styles.photoButtonText}>Галерея</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({


    photoSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24,
        marginLeft: 20,
    },
    profileCircle: {
        backgroundColor: '#8E6CEF',
        borderRadius: 40,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileInitials: {
        fontSize: 22,
        color: '#170F2B',
        fontFamily: "ManropeBold",
    },
    photoLabel: {
        marginLeft: 20,
        fontSize: 22,
        color: '#170F2B',
        alignSelf: 'center',
    },
    photoButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#8E6CEF",
        paddingBottom: 16,
    },
    photoButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    galleryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 35,
    },
    photoButtonText: {
        color: '#8E6CEF',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 6,
    },
});