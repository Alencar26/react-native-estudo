import React, { useState } from "react";
import { StyleSheet,  Text,  View, Picker } from 'react-native';


export function PickerEx() {

  const [selectedValue, setSelectedValue] = useState(0);
  const [pizzas, SetPizzas] = useState(
    [
      {id: 1, nome: 'Calabresa', valor: 27.90},
      {id: 2, nome: 'Queijo', valor: 25.90},
      {id: 3, nome: 'Brigadeiro', valor: 30.90},
      {id: 4, nome: 'Beijinho', valor: 35.90},
    ]
  );

  let pizzasItem = pizzas.map(
    (item, k) => <Picker.Item label={item.nome} value={k} key={k} />
  )

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Menu de pizza</Text>

      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150, alignSelf: 'center' }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {pizzasItem}
      </Picker>

      <Text style={styles.pizzas}>Você escolheu: {pizzas[selectedValue].nome}</Text>
      <Text style={styles.pizzas}>R$: {pizzas[selectedValue].valor.toFixed(2)}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
  },
  pizzas: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center',
  },
});
