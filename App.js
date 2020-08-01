import React from 'react';
import { StyleSheet, ImageBackground, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
// Files to Import
import getImageForWeather from './utils/getImageForWeather';
import SearchInput from './components/SearchInput.js';

export default class App extends React.Component {
  render() {

    const location = 'Los Angeles';
    return (
      <KeyboardAvoidingView style={styles.container}>
        {/* Background Image */}
        <ImageBackground
        source={getImageForWeather('Clear')}
        style={styles.imageContainer}
        imageStyle={styles.image}
        >

          {/* Container for Text */}
          <View style={styles.detailsContainer}>

            {/* Text labels  */}
            <Text style={[styles.largeText, styles.textStyle]}>Los Angeles</Text>
            <Text style={[styles.smallText, styles.textStyle]}>Light Clouds</Text>
            <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
            {/* Search Textbox Input  */}
            <SearchInput placeholder="Search Any City.." />

          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}



// ################ Styles ################
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
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
    color: 'white',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
});
