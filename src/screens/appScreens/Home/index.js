import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import { COLORS } from '../../../constants';
import MapComponent from './MapComponent';
import StationsList from './StationsList';
import LoadComponent from '../../../components/LoadComponent';
import NoInternet from '../../../components/NoInternet';

const Home = ({ navigation }) => {
  const [stationsArr, setStationsArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState(true);

  useEffect(() => {
    setLoading(true);
    NetInfo.addEventListener(state => {
      setConnectionStatus(state.isInternetReachable);
      setLoading(false);
    });

    getStationsData();
  }, []);

  const getStationsData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://api.npoint.io/6061032e176022920284");
      setStationsArr(res.data.message);
    } catch (error) {
      console.error('Error fetching stations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {connectionStatus ? (
        loading ? <LoadComponent /> : (
          <>
            <MapComponent stationsArr={stationsArr} />
            {stationsArr && <StationsList stationsArr={stationsArr} navigation={navigation} />}
          </>
        )
      ) : <NoInternet />}
    </View>
  );
};

export default Home;
