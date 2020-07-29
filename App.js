import React from 'react';
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      {/* Text label  */}
      <Text style={[styles.largeText, styles.textStyle]}>Los Angeles</Text>
      <Text style={[styles.smallText, styles.textStyle]}>Light Clouds</Text>
      <Text style={[styles.largeText, styles.textStyle]}>24°</Text>

      {/* TextInput field box
        - "clearButtonMode" refers to a checkbox placed inside of textInput, that when the user clicks on it, it removes clears textfield. ONLY applies to IOS */}
      <TextInput
        autoCorrect={false}
        placeholder="Search Any City.." 
        placeholderTextColor="white"
        style={styles.textInput}
        clearButtonMode="always"
      />

      {/* End of View */}
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
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
});
