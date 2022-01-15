import React, { useState } from 'react';
import { StyleSheet,  Text,  View } from 'react-native';

import Slider from '@react-native-community/slider';

export function SliderEx() {

    const [valor, setValor] = useState(3)

  return (
    <View style={styles.container}>
      <Text>Slider - valor: {valor}</Text>
      <Slider
            style={{width: '100%', height: 40}}
            minimumValue={1}
            maximumValue={5}
            minimumTrackTintColor="#b33"
            maximumTrackTintColor="#000000"
            value={valor}
            onValueChange={ (valorSelecionado) => {setValor(valorSelecionado.toFixed(0))}}
            thumbTintColor='#cf1'
        />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
