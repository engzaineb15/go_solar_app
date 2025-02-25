import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, PermissionsAndroid } from 'react-native';
import axios from 'axios';
import MapComponent from './MapComponent';
import StationList from './StationList';
import Geolocation from 'react-native-geolocation-service';
import { COLORS } from '../../../constants';

const ElectricChargeStation = ({ navigation }) => {
  const [stationsArr, setStationsArr] = useState([]);
  const mapAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => { fetchStations(); }, []);

  const fetchStations = async () => {
    try {
      const res = await axios.get("https://api.npoint.io/6061032e176022920284");
      setStationsArr(res.data.message);
    } catch (error) {
      console.error('Error fetching stations:', error);
    }
  };

  const requestLocation = async () => {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (granted) {
      Geolocation.getCurrentPosition(position => {
        console.log(position);
      }, error => console.log(error), { enableHighAccuracy: true, timeout: 15000 });
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <MapComponent stationsArr={stationsArr} mapAnimation={mapAnimation} onMarkerPress={() => {}} requestLocation={requestLocation} />
      <StationList stationsArr={stationsArr} mapAnimation={mapAnimation} navigation={navigation} />
    </View>
  );
};

export default ElectricChargeStation;
