import React, { useState } from 'react';
import { StyleSheet,  Text,  View, TextInput, Switch, Picker } from 'react-native';
import Slider from '@react-native-community/slider';

export function BancoReact() {

    const [sexo, setSexo] = useState([
        'Escolha seu sexo',
        'Masculino',
        'Feminino',
        'Prefiro não informar'
    ])

    const [selectedValue, setSelectedValue] = useState(0);

    let sexoItem = sexo.map(
        (item, k) => <Picker.Item label={item} value={k} key={k} />
      )

    const [limite, setLimite] = useState(50)

    const [cliente, setCliente] = useState(
        {
            nome: '',
            idade: 0,
            sexo: sexo[selectedValue],
            estudante: false,
            limite: limite,
        }
    )

  return (
    <View style={styles.container}>
      <View style={[styles.titulo, styles.subContainer]}>
        <Text style={{ fontSize:28, fontWeight: 'bold' }}>Banco React</Text>
      </View>
      <View style={[styles.inputs, styles.subContainer]}>

      <TextInput 
            style={styles.textInput}
            placeholder='Digite seu nome'
            underlineColorAndroid='transparent'
            onChangeText={(entrada) => {
              setCliente({ nome: entrada })
            }}
          />
          <TextInput 
            style={styles.textInput}
            placeholder='Idade'
            underlineColorAndroid='transparent'
            onChangeText={(entrada) => {
              setCliente({ idade: entrada })
            }}
          />

          <View style={[styles.estudante]}>
                <Text>Estudante: </Text>
                <Switch 
                value={cliente.estudante} // determina se está ligado ou não
                onValueChange={ (valorSwitch) => {setCliente({ estudante: valorSwitch })} }
                />
          </View>

          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: '85%', alignSelf: 'center' }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
                {sexoItem}
          </Picker>

          <Text>
              Limite: {limite}
          </Text>
        
          <Slider
            style={{width: '100%', height: 40}}
            minimumValue={50}
            maximumValue={50000}
            minimumTrackTintColor="#b33"
            maximumTrackTintColor="#000000"
            value={limite}
            onValueChange={ (valorSelecionado) => {setLimite(valorSelecionado.toFixed(0))}}
            thumbTintColor='#cf1'
        />
      </View>
      <View style={[styles.button, styles.subContainer]}>
        <Text>Nome {cliente.nome}</Text>
        <Text>Idade {cliente.idade}</Text>
        <Text>sexo {cliente.sexo}</Text>
        <Text>estudante {cliente.estudante}</Text>
        <Text>limite R${cliente.limite}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
      flex: 1,
  },
  titulo: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputs:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 50
  },
  textInput:{
    height: 45,
    width: '100%',
    borderWidth: 1,
    borderColor: '#aaa',
    margin: 10,
    fontSize: 20,
    padding: 10,
    borderRadius: 10
  },
  estudante: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },    
});
