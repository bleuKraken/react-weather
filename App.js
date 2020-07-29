import React from 'react';
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      {/* Text label  */}
      <Text style={[styles.largeText, styles.textStyle]}>Los Angeles</Text>
      <Text style={[styles.smallText, styles.textStyle]}>Light Clouds</Text>
      <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
    </View>
  );
}

// Muh styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
});
