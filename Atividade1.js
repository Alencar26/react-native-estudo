import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.SecaoUm}>
        <Text style={styles.TextoSecaoUm}>
          Atividade 1 {"\n"}
          André Augusto Rolim de Alencar {"\n"}
          RA: 2019101851 {"\n"}
          11/09/2021
        </Text>
      </View>
      <View style={styles.SecaoDois}>
        <View style={styles.QuadradoVermelho}></View>
        <View style={styles.QuadradoVerde}></View>
        <View style={styles.QuadradoAzul}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  SecaoUm: {
    flex: 0.5,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  SecaoDois: {
    flex: 0.5,
    backgroundColor: '#EEE',
  },
  TextoSecaoUm: {
    fontWeight: 'bold',
    fontSize: 20
  },
  QuadradoVermelho: {
    backgroundColor: '#A20202',
    width: 50,
    height: 50,
    position: 'absolute',
    left: 200,
    top: 150,
    zIndex: 2
  },
  QuadradoVerde: {
    backgroundColor: '#02FA2F',
    width: 50,
    height: 50,
    position: 'absolute',
    left: 190,
    top: 150,
    zIndex: 3
  },
  QuadradoAzul: {
    backgroundColor: '#00AAFF',
    width: 50,
    height: 50,
    position: 'absolute',
    left: 200,
    top: 190,
    zIndex: 1
  },
});