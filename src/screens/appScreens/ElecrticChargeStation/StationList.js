import React from 'react';
import { Animated, FlatList } from 'react-native';
import StationCard from './StationCard';

const StationList = ({ stationsArr, mapAnimation, navigation }) => {
  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={1}
      showsHorizontalScrollIndicator={false}
      snapToInterval={340}
      snapToAlignment="center"
      contentInset={{ top: 0, left: 20, bottom: 0, right: 20 }}
      contentContainerStyle={{ paddingHorizontal: 20 }}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: mapAnimation } } }], { useNativeDriver: true })}>
      <FlatList
        data={stationsArr}
        horizontal
        keyExtractor={(_, index) => `st#-${index}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <StationCard
            item={item}
            onPress={() => navigation.navigate('ProjectDetails', { psItem: item })}
          />
        )}
      />
    </Animated.ScrollView>
  );
};

export default StationList;
