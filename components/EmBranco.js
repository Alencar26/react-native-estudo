import React from 'react';
import { StyleSheet,  Text,  View } from 'react-native';

export function EmBranco() {

  return (
    <View style={styles.container}>
      <Text>testando... </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
