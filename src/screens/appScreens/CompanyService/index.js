import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Header } from '../../../components';
import { COLORS, SIZES, images } from '../../../constants';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import styles from './CompanyService.styles';
import LoadComponent from '../../../components/LoadComponent';  
import NoInternet from '../../../components/NoInternet';  

const CompanyService = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState(true);
  const [myOptions, setMyOptions] = useState([]);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnectionStatus(state.isInternetReachable);
      setLoading(false);
    });
    getSelectServices();
    return () => unsubscribe();
  }, []);

  const getSelectServices = () => {
    setLoading(true);
    axios
      .get("https://api.npoint.io/6061032e176022920284")
      .then(res => setMyOptions(res.data.message))
      .catch(error => console.error('Error fetching stations:', error))
      .finally(() => setLoading(false));
  };

  const renderHeader = () => <Header title="الخدمات" containerStyle={{ height: RFValue(65) }} twoRight={true} fill={true} />;

  const renderMyFuel = () => (
    <View style={{ paddingBottom: SIZES.padding * 4 }}>
      {myOptions.map((item, index) => (
        <Animatable.View key={index} delay={index * 100} animation="fadeInUp" useNativeDriver>
          <TouchableOpacity
            style={styles.serviceCard}
            onPress={() => navigation.navigate(index === myOptions.length - 1 ? 'ElecrticChargeStation' : 'PersonsService', {
              type: index + 1,
              service: item.name,
              service_id: item.service_id
            })}
          >
            <ImageBackground
              source={item?.icon ? { uri: item.icon } : images.solarJobs}
              style={styles.backgroundImage}
              resizeMode="cover"
            >
              <Text style={styles.serviceText}>{item.name}</Text>
            </ImageBackground>
          </TouchableOpacity>
        </Animatable.View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      {connectionStatus ? (loading ? <LoadComponent /> : 
        <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
          {renderMyFuel()}
        </ScrollView>
      ) : <NoInternet />}
    </View>
  );
};

export default CompanyService;
