import React, { useState } from 'react';
import { StyleSheet,  Text,  View, Switch } from 'react-native';

export function SwitchEx() {

    const [status, setStatus] = useState(false);

  return (
    <View style={styles.container}>
        
        <Switch 
            value={status} // determina se está ligado ou não
            onValueChange={ (valorSwitch) => {setStatus(valorSwitch)} }
            thumbColor='#FF0000'
        />

        <Text style={styles.text}>
            { (status) ? 'O switch está ligado' : 'O switch está deligado' }
        </Text>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      marginTop: 15,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
