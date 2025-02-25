import React from 'react';
import { Animated, TouchableOpacity, FlatList, View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SharedElement } from 'react-navigation-shared-element';
import styles from './styles';

const StationsList = ({ stationsArr, navigation }) => {
  return (
    <Animated.ScrollView horizontal pagingEnabled style={styles.scrollView}>
      <FlatList
        data={stationsArr}
        horizontal
        keyExtractor={(item, index) => `station-${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ProjectDetails', { psItem: item })}
            style={styles.card}
          >
            <SharedElement id={`item.${item.station_id}.img`} style={styles.cardImage}>
              <FastImage source={{ uri: item.image }} style={styles.cardImage} resizeMode="stretch" />
            </SharedElement>
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.stationName}>{item.name}</Text>
              <Text numberOfLines={1} style={styles.stationAddress}>{item.address}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </Animated.ScrollView>
  );
};

export default StationsList;
