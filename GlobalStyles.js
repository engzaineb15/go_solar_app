import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noInternetText: {
    ...FONTS.h2,
    color: COLORS.black,
  },
  noInternetImage: {
    width: RFValue(150),
    height: RFValue(150),
  },
});
