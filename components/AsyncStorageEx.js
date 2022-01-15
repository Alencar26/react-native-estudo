import React, { useState, useEffect } from 'react';
import { StyleSheet,  Text,  View, TextInput, TouchableOpacity, Keyboard } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage'

export function AsyncStorageEx() {

    const [input, setInput] = useState('')
    const [nome, setNome] = useState('')

    useEffect(() => {
        
        if(nome == null || nome == '' || nome == undefined){
            readNome();
        } else {
            saveNome();
        }
        
    }, [nome])

    const saveNome = async () => {
        try {
            await AsyncStorage.setItem('nome', nome)
            alert('Nome salvo com sucesso')
        } catch (e) {
            alert('Error: ' + e.message)
        }
    }

    const readNome = async () => {
        try {
            await AsyncStorage.getItem('nome').then((value) => {
                setNome(value)
            })
        } catch (e) {
            alert('Error: ' + e.message)
        }
    }

    const gravaNome = () => {

        setNome(input);
        Keyboard.dismiss();
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.viewInput}>
                <TextInput 
                    style={styles.input}
                    value={input}
                    onChangeText={(texto) => setInput(texto)}
                    underlineColorAndroid="transparent"
                />

                <TouchableOpacity onPress={gravaNome}>
                    <Text style={styles.botao}>+</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.nome}>{nome}</Text>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
    },
    viewInput: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        width: 350,
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
    },
    botao: {
        backgroundColor: '#222',
        color: '#fff',
        height: 40,
        padding: 10,
        marginLeft: 4,
    },
    nome: {
        marginTop: 15,
        fontSize: 30,
        textAlign: 'center',
    },
});
