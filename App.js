import React from 'react';
import { StyleSheet, ImageBackground, Text, View, KeyboardAvoidingView, Platform, ActivityIndicator, StatusBar } from 'react-native';
// Files to Import
import { fetchLocationId, fetchWeather } from './utils/api';
import getImageForWeather from './utils/getImageForWeather';
import SearchInput from './components/SearchInput.js';

export default class App extends React.Component {
  // Sets default location
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      location: '',
      temperature: 0,
      weather: '',
    };
  }

  // Predefined Lifecycle Method - runs after application loads successfully
  // - gets triggered when application first loads and populates the city text aera
  componentDidMount() {
    this.handleUpdateLocation('Los Angeles');
  }

  // WHen the user submits a new city, we change the state to the new city typed in
  handleUpdateLocation = async city => {
    if (!city) return;

    this.setState({ loading: true }, async () => {
      try {
        const locationId = await fetchLocationId(city);
        const { location, weather, temperature } = await fetchWeather(
          locationId,
        );

        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature,
        });
      } catch (e) {
        this.setState({
          loading: false,
          error: true,
        });
      }
    });
  };

  // Once we have all the data we need, begin to populate
  render() {
    const { loading, error, location, weather, temperature } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar barStyle="light-content" />
        {/* Background Image */}
        <ImageBackground
          source={getImageForWeather(weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >

          <View style={styles.detailsContainer}>
            <ActivityIndicator animating={loading} color="white" size="large" />

            {!loading && (
              <View>
                {error && (
                  <Text style={[styles.smallText, styles.textStyle]}>Could not load weather, please try a different city.</Text>
                )}

                {!error && (
                  <View>
                    <Text style={[styles.largeText, styles.textStyle]}> {location} </Text>
                    <Text style={[styles.smallText, styles.textStyle]}> {weather} </Text>
                    <Text style={[styles.largeText, styles.textStyle]}> {`${Math.round(temperature)}°`} </Text>
                  </View>
                )}

                <SearchInput
                  placeholder="Search any city"
                  onSubmit={this.handleUpdateLocation}
                />
              </View>
            )}
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}


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
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});
