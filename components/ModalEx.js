import React, { useState } from 'react';
import { StyleSheet,  Text,  View, Button, Modal } from 'react-native';

export function ModalEx() {

    const [modalVisible, setModalVisible] = useState(false);

    const entrar = () => { setModalVisible(true); }
    const fecharModal = () => { setModalVisible(false); }

    return (
        <View style={styles.container}>

            <Button title='Mostrar Modal' onPress={entrar} />

            <Modal transparent={true} animationType='slide' visible={modalVisible} style={{ marginTop: 200 }}>
                <View style={styles.modal}>
                    <Text style={styles.text}>Seja bem vindo ao meu modal</Text>
                    <Button title='Fechar' onPress={fecharModal} />
                </View>
            </Modal>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDD'
    },
    modal: {
        flex: 1,
        marginTop: '120%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#292929',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 15
    }
});
