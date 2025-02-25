import React from 'react';
import { View, Text } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import { COLORS, FONTS, lotties } from '../../../constants';
import { RFValue } from 'react-native-responsive-fontsize';

const NoInternet = () => {
  return (
    <View style={styles.centerContainer}>
      <AnimatedLottieView source={lotties.nonetwork} autoPlay loop style={styles.lottie} resizeMode="cover" />
      <Text style={styles.text}>لا يوجد اتصال بالانترنت</Text>
    </View>
  );
};

const styles = {
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: RFValue(150),
    height: RFValue(150),
  },
  text: {
    ...FONTS.h2,
    color: COLORS.black,
  },
};

export default NoInternet;
