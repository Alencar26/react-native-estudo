import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native';

export function ScrollFlatListInput() {

  const [mensagem, setMensagem] = useState('');
  const [lista, setLista] = useState(
    [
      {id: 1, largura: 100, altura: 100, cor: '#aaa'},
      {id: 2, largura: 100, altura: 100, cor: '#bbb'},
      {id: 3, largura: 100, altura: 100, cor: '#ccc'},
      {id: 4, largura: 100, altura: 100, cor: '#ddd'},
      {id: 5, largura: 100, altura: 100, cor: '#fff'},
    ]
  );

  return (
    <View style={styles.container}>
      <View style={[styles.subcontainer, { backgroundColor: '#2ff' }]}>
        <ScrollView style={styles.linhaRolante} horizontal={true}>
          <View style={[styles.quadrado, { backgroundColor: '#25cc' }]} />
          <View style={[styles.quadrado, { backgroundColor: '#1dd' }]} />
          <View style={[styles.quadrado, { backgroundColor: '#3d3' }]} />
          <View style={[styles.quadrado, { backgroundColor: '#ee3' }]} />
          <View style={[styles.quadrado, { backgroundColor: '#a22' }]} />
          <View style={[styles.quadrado, { backgroundColor: '#f22' }]} />
          <View style={[styles.quadrado, { backgroundColor: '#d75' }]} />
          <View style={[styles.quadrado, { backgroundColor: '#a5b' }]} />
          <View style={[styles.quadrado, { backgroundColor: '#bb3f' }]} />
          <View style={[styles.quadrado, { backgroundColor: '#faa322' }]} />
        </ScrollView>
      </View>
      <View style={[styles.subcontainer, { backgroundColor: '#d75' }]}>
        <View horizontal={true}>
          <Text style={{ color: '#fff', fontWeight: 'bold'}}>Esse componente não renderiza o que não está sendo mostrado</Text>
          <FlatList 
            data={lista}
            renderItem={ ({ item }) => <Lista 
                                          altura={item.altura} 
                                          largura={item.largura} 
                                          cor={item.cor} 
                                        />
             }
             keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View style={[styles.subcontainer, { backgroundColor: '#22dd' }]}>
        <TextInput 
            style={styles.textInput}
            placeholder='Digite seu nome'
            underlineColorAndroid='transparent'
            onChangeText={(entrada) => {
              setMensagem(entrada)
            }}
          />
          <Text style={styles.text}>{'Seu nome: ' + mensagem}</Text>
      </View>
    </View>
  );
}

const Lista = (props) => {

  const { largura = 0, altura = 0, cor = '#fff'} = props;

  return(
    <View style={{ width: largura, height: altura , backgroundColor: cor }} />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  subcontainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    height: 45,
    borderWidth: 1,
    borderColor: '#aaa',
    margin: 10,
    fontSize: 20,
    padding: 10,
    borderRadius: 10
  },
  text: {
    fontSize: 20,
    color: '#2bb',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  quadrado: {
    height: 50,
    width: 50,
    marginRight: 10
  },
  linhaRolante: {
    flexDirection: 'row',
    marginTop: 50
  },
});
