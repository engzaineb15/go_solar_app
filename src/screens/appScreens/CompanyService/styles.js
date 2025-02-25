import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../../constants';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollViewContent: {
    flexGrow: 1,
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.radius,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceCard: {
    height: RFValue(250),
    marginTop: SIZES.radius,
    borderWidth: 2,
    borderRadius: SIZES.radius + 2,
    borderColor: COLORS.primary,
  },
  backgroundImage: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding,
  },
  serviceText: {
    ...FONTS.h2,
    textAlign: 'center',
    color: COLORS.white,
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
