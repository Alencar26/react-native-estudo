import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.SecaoUm}>
        <Text style={styles.TextoSecaoUm}>
          flex-grow
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
    backgroundColor: '#EEE125',
    flexGrow: 1.0,
    flexWrap: "wrap-reverse"
  },
  TextoSecaoUm: {
    fontWeight: 'bold',
    fontSize: 20
  },
  QuadradoVermelho: {
    backgroundColor: '#A20202',
    width: 50,
    height: 50,
  },
  QuadradoVerde: {
    backgroundColor: '#02FA2F',
    width: 50,
    height: 50,
  },
  QuadradoAzul: {
    backgroundColor: '#00AAFF',
    width: 50,
    height: 50,
  },
});