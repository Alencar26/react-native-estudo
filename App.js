import React from 'react';
import { StyleSheet,  Text,  View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { ScrollFlatListInput } from './components/ScrollFlatListInput'
import { PickerEx } from './components/PickerEx'
import { SliderEx } from './components/SliderEx';
import { SwitchEx } from './components/SwitchEx';
import { AsyncStorageEx } from './components/AsyncStorageEx';
import { ModalEx } from './components/ModalEx';
import { RecHttpEx } from './components/RecHttpEx';
import { Animacao } from './components/Animacoes/Animacao'

//instagram
import { Instagram } from './components/Instagram'

//desafios:
import { BancoReact } from './components/BancoReact' //ficou uma porcaria kkkk

export default function App() {

  return (
    <View style={styles.container}>

        <Animacao />
            <StatusBar
            style="auto"
            translucent={false}
            backgroundColor={'#FFF'}
            />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
