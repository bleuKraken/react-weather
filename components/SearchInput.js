/*
  All custom components for App file will live inside here
  - this can be seen as a child of app.js
*/
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export default class SearchInput extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      {/* TextInput field box
        - "clearButtonMode" refers to a checkbox placed inside of textInput, that when the user clicks on it, it removes clears textfield. ONLY applies to IOS
        - 'this.props.placeholder' allows the placeholder to be determined by the parent App.js*/}
      <TextInput
        style={styles.textInput}
        autoCorrect={false}
        placeholder={this.props.placeholder}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        clearButtonMode="always"
      />

      </View>
    );
  }
}

// ################ Styles ################
const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 300,
    marginTop: 20,
    backgroundColor: '#666',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
  },
});
