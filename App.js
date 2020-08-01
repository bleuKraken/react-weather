import React from 'react';
import { StyleSheet, ImageBackground, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
// Files to Import
import getImageForWeather from './utils/getImageForWeather';
import SearchInput from './components/SearchInput.js';

export default class App extends React.Component {
  // Sets default location
  constructor(props) {
    super(props);
    this.state = {
      location: 'Los Angeles',
    };
  }

  // WHen the user submits a new city, we change the state to the new city typed in
  handleUpdateLocation = city => {
    this.setState({
      location: city,
    });
  };

  render() {
    // Vars
    const { location } = this.state;
    // Return the magic
    return (
      <KeyboardAvoidingView style={styles.container}>

        {/* Background Image */}
        <ImageBackground
          source={getImageForWeather('Clear')}
          style={styles.imageContainer}
          imageStyle={styles.image}>

          {/* Container for Text */}
          <View style={styles.detailsContainer}>
            <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
            <Text style={[styles.smallText, styles.textStyle]}>Light Clouds</Text>
            <Text style={[styles.largeText, styles.textStyle]}>24°</Text>

            {/* Search Textbox Input  */}
            <SearchInput
             placeholder="Search Any City.."
             onSubmit={this.handleUpdateLocation}/>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

// ################ Styles Below ################
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
