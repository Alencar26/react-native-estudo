import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export function Animacao() {

    const larAnimada = new Animated.Value(150);
    const altAnimada = new Animated.Value(50);

    useEffect(() => {
        
        Animated.timing(
            altAnimada,
            {
                toValue: 150,
                duration: 2000
            }
        ).start();
    }, [])

    return(

        <View style={styles.container}>
            <Animated.View style={[styles.quadrado, { width: larAnimada, height:altAnimada }]}>
                <Text style={styles.texto}>Carregando...</Text>
            </Animated.View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quadrado: {
        backgroundColor: '#4169E1',
        justifyContent: 'center',
    },
    texto: {
        color: '#FFF',
        fontSize: 22,
        textAlign: 'center',
    }
})