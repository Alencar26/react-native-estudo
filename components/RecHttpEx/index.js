import React, { useState, useEffect } from 'react';
import { StyleSheet,  Text,  View, FlatList } from 'react-native';

import { Filmes } from './Filmes'
import api from './server/api';

export function RecHttpEx() {

    const [filmes, setFilmes] = useState();

    useEffect(() => {

        const response = api.get("r-api/?api=filmes");
        setFilmes(response.data);
    }, [])


  return (
    <View style={styles.container}>
        <Text>Olá Teste!</Text>
        <FlatList
        data={filmes}
            keyExtractor={ item => item.id.toString() }
            renderItem={ ({ item }) => <Filmes data={item} /> }
        />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
});
