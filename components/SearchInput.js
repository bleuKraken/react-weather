/*
  All custom components for App file will live inside here
  - this can be seen as a child of app.js
*/
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export default class SearchInput extends React.Component {

  /* Constructor is used to initialize the compoent-specific data aka state */
    constructor(props) {
      super(props);
      this.state = {
        text: '',
      };
    }

  // .setState() is used to get value when new letters are typed into search box
  handleChangeText = text => {
    this.setState({ text});
  }

  // User has submited or entered a new city
  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    // If its not blank, then continue to onSubit()
    if(!text) return;
    // Capture text
    onSubmit(text);
    // Resets text value
    this.setState({text: ''});
  }

  // Where the magic happens
  render() {
    const { placeholder } = this.props;
    const { text } = this.state;

    return (
      <View style={styles.container}>

        {/* TextInput field box
          - "clearButtonMode" refers to a checkbox placed inside of textInput, that when the user clicks on it, it removes clears textfield. ONLY applies to IOS
          */}
        <TextInput
          style={styles.textInput}
          autoCorrect={false}
          value={text}
          placeholder={placeholder}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          clearButtonMode="always"
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}/>

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
