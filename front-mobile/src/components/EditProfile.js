import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';

import axios from 'axios';
import {URL} from '../helpers/index';
const endpoint = URL;

export default function EditProfile({ isEditModalVisible, toggleEditModal }) { 
    const [editedProfile, setEditedProfile] = useState({
        name: '',
        lastname: '',
        email: '',
        city: '',
        country: '',
        summary: '',
    });

    const updateProfile = async () => {
        try {
            await axios.put(`${endpoint}/profile/1`, editedProfile);
            toggleEditModal();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isEditModalVisible}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Editar perfil</Text>
                    <TextInput
                        editable
                        style={styles.input}
                        placeholder="Nombre"
                        onChangeText={(text) => handleInputChange('name', text)}
                        value={editedProfile.name}
                    />
                    <TextInput
                        editable
                        style={styles.input}
                        placeholder="Apellido"
                        onChangeText={(text) => handleInputChange('lastname', text)}
                        value={editedProfile.lastname}
                    />

                    <TextInput
                        editable
                        style={styles.input}
                        placeholder="Correo electrónico"
                        onChangeText={(text) => handleInputChange('email', text)}
                        value={editedProfile.email}
                    />
                    <TextInput
                        editable
                        style={styles.input}
                        placeholder="Ciudad"
                        onChangeText={(text) => handleInputChange('city', text)}
                        value={editedProfile.city}
                    />
                    <TextInput
                        editable
                        style={styles.input}
                        placeholder="País"
                        onChangeText={(text) => handleInputChange('country', text)}
                        value={editedProfile.country}
                    />
                    <TextInput
                        editable
                        style={styles.input}
                        placeholder="Descripción"
                        onChangeText={(text) => handleInputChange('summary', text)}
                        value={editedProfile.summary}
                    />

                    <View style={styles.btns} >
                    <Button style={styles.boton} title="Actualizar" onPress={updateProfile} />
                    </View>
                    
                    <View style={styles.btns} >
                        <Button style={styles.boton} title="Cancelar" onPress={toggleEditModal} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        elevation: 5,
        marginTop: 20,
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        width: '90%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingVertical: 5,
    },
    btns: {
        marginTop: 10,
    },
});
