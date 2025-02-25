import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { IconButton } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import { COLORS, FONTS, icons } from '../../../constants';

const MapComponent = ({ stationsArr, mapAnimation, onMarkerPress, requestLocation }) => {
  const mapView = useRef(null);

  return (
    <>
      <MapView
        ref={mapView}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation={true}
        showsCompass={true}>
        {stationsArr.map((marker, index) => {
          const scaleStyle = {
            transform: [{ scale: mapAnimation.interpolate({
              inputRange: [(index - 1) * 200, index * 200, (index + 1) * 200],
              outputRange: [1, 1.5, 1],
              extrapolate: 'clamp',
            })}],
          };

          return (
            <Marker
              key={index}
              coordinate={{ latitude: parseFloat(marker.latitude), longitude: parseFloat(marker.longitude) }}
              onPress={(e) => onMarkerPress(e)}>
              <Animated.View style={[styles.markerWrap, scaleStyle]}>
                <Animated.Image source={icons.charging_location} style={styles.marker} />
              </Animated.View>
            </Marker>
          );
        })}
      </MapView>

      <View style={styles.searchBox}>
        <Text style={FONTS.body3}>عنوانك على الخريطة</Text>
        <IconButton
          icon={() => <FastImage source={icons.target} style={{ width: 25, height: 25 }} />}
          size={8}
          onPress={requestLocation}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  map: { flex: 1 },
  markerWrap: { alignItems: 'center', justifyContent: 'center', width: 50, height: 50 },
  marker: { width: 30, height: 30 },
  searchBox: {
    position: 'absolute',
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default MapComponent;
