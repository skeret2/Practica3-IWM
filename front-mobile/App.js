import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView  } from 'react-native';
import EditProfile from './src/components/EditProfile';

import { Modal } from 'react-native';
import { navigation} from '@react-navigation/native';

import {URL} from './src/helpers/index';
import axios from 'axios';
const endpoint = URL;

export default function App() {
  const [profiles, setProfiles] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    axios.get(`${endpoint}profile`)
      .then(res => {
        console.log({ response: res.data });
        setProfiles(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };



  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Image
          style={styles.imagen}
          source={require('./assets/imagen_profile.jpg')}
        />
        {profiles.length > 0 ? (
          profiles.map(profile => (
            <View key={profile.id.toString()} style={styles.profileContainer}>
              <Text style={styles.profileNombre}>{profile.name}</Text>
              <Text style={styles.profileNombre}>{profile.lastname}</Text>
              <Text style={styles.profileText}>{profile.email}</Text>
              <Text style={styles.profileText}>{profile.city}</Text>
              <Text style={styles.profileText}>{profile.country}</Text>
              <Text style={styles.profileText}>{profile.summary}</Text>

              <View>
                <View style={styles.fondo2}>
                    <Text style={styles.tableHeader}>Hobbies:</Text>
                </View>
                {profile.hobbies.map(hobby => (
                <View style={styles.tablerow}>
                    <Text style={styles.tableCell}>{hobby.name_hobby}</Text>
                    <Text style={styles.tableCell}>{hobby.description}</Text>
                </View>
                ))}

                <View style={styles.fondo2}>
                    <Text style={styles.tableHeader}>Frameworks:</Text>
                </View>
                {profile.frameworks.map(frameworks => (
                <View style={styles.tablerow}>
                    <Text style={styles.tableCell}>{frameworks.name_framework}</Text>
                    <Text style={styles.tableCell}>{frameworks.level}</Text>
                    <Text style={styles.tableCell}>{frameworks.year}</Text>
                </View>
                ))}
              </View>

            </View>
            
          ))
        ) : (
          <Text>No hay perfiles para mostrar.</Text>
        )}

        <Button title="Editar Perfil" onPress={() => setModalVisible(true)} />  
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <EditProfile
            navigation={navigation}  // Pasa la prop navigation al componente EditProfile
            isEditModalVisible={modalVisible}
            toggleEditModal={() => setModalVisible(!modalVisible)}
          />
        </Modal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffc8dd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen: {
    width: 150,
    height: 150,
    resizeMode: 'cover', 
    borderRadius: 30,
  },
  profileContainer: {
    backgroundColor: '#bde0fe',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  profileNombre: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    alignContent: 'center',
    textAlign: 'center',
  },
  tableHeader: {
    backgroundColor: '#bde0fe',
    padding: 3,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
  },
  tablerow: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  tableCell: {
    width: '50%',
    padding: 3,
    textAlign: 'center',
  },
  fondo2: {
    backgroundColor: '#ffc8dd',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
});
