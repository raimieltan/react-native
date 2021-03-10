import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Button, Header, PricingCard } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';

export default function App() {

  const [location, setLocation] = useState({"coords":{"latitude": 0,"longitude": 0 }});
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }


    let location = await Location.getCurrentPositionAsync({ accuracy: 6 });
    console.log(location["coords"]["latitude"])
    setLocation(location);
  }

  useEffect(() => {
    fetchLocation();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaProvider>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <View style={styles.container}>
        <Text>{new Date().toString()}</Text>
        <StatusBar style="auto" />
        <Text>hello</Text>
        <Button
          title="Solid Button"
        />

      </View>

      <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
            // latitude: location["coords"]["latitude"],
            // longitude: location["coords"]["longitude"],
            // latitudeDelta: 0.0922,
            // longitudeDelta: 0.0421,
            latitude: location["coords"]["latitude"],
            longitude: location["coords"]["longitude"],
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} />
      </View>

      <View style={styles.container}>
        <Text style={styles.paragraph}>{text}</Text>
      </View>

      {/* <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
