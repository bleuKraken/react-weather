import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native';

import SearchInput from './components/SearchInput.js';
export default class App extends React.Component {
  render() {


    return (

      <KeyboardAvoidingView style={styles.container}>
        {/* Text label  */}
        <Text style={[styles.largeText, styles.textStyle]}>Los Angeles</Text>
        <Text style={[styles.smallText, styles.textStyle]}>Light Clouds</Text>
        <Text style={[styles.largeText, styles.textStyle]}>24°</Text>


        <SearchInput placeholder="Search Any City.." />
        {/* End of View */}
      </KeyboardAvoidingView>
    );
  }
}

// ################ Styles ################
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
