import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SharedElement } from 'react-navigation-shared-element';
import { COLORS, FONTS } from '../../../constants';

const CARD_WIDTH = 320;
const CARD_HEIGHT = 220;

const StationCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.card}>
      <SharedElement id={`item.${item.station_id}.img`} style={styles.cardImage}>
        <FastImage source={{ uri: item.image }} style={styles.cardImage} resizeMode="stretch" />
      </SharedElement>
      <View style={styles.textContent}>
        <Text numberOfLines={1} style={[FONTS.h3, { color: COLORS.black, flex: 1 }]}>{item.name}</Text>
        <Text numberOfLines={1} style={[FONTS.h4, { color: COLORS.darkGray }]}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 2,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
  },
  cardImage: { flex: 3, width: '100%', height: '100%', alignSelf: 'center' },
  textContent: { flex: 2, padding: 10 },
});

export default StationCard;
