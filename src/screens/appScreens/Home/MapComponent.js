import React, { useRef, useEffect, Animated } from 'react';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { IconButton } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import { COLORS, FONTS, icons } from '../../../constants';
import styles from './styles';

const MapComponent = ({ stationsArr }) => {
  const mapView = useRef();
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    if (stationsArr.length > 0) {
      mapView.current.animateToRegion({
        latitude: parseFloat(stationsArr[0].latitude),
        longitude: parseFloat(stationsArr[0].longitude),
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
      });
    }
  }, [stationsArr]);

  return (
    <>
      <MapView
        ref={mapView}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        style={styles.container}
      >
        {stationsArr.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: parseFloat(marker.latitude),
              longitude: parseFloat(marker.longitude),
            }}
          >
            <View style={styles.markerWrap}>
              <FastImage source={icons.charging_location} style={styles.marker} />
            </View>
          </Marker>
        ))}
      </MapView>

      <View style={styles.searchBox}>
        <Text style={FONTS.body3}>عنوانك على الخريطة</Text>
        <IconButton icon={() => <FastImage source={icons.target} style={styles.icon} />} />
      </View>
    </>
  );
};

export default MapComponent;
