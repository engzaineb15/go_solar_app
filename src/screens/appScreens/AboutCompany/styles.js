import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    height: RFValue(65),
  },
  scrollContainer: {
    flexGrow: 1,
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.padding * 4,
  },
  mainImage: {
    width: '100%',
    height: RFValue(250),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.margin,
  },
  title: {
    ...FONTS.h2,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginBottom: SIZES.margin,
    textAlign: 'center',
  },
  subtitle: {
    ...FONTS.h3,
    color: COLORS.black,
    fontWeight: 'bold',
    marginBottom: SIZES.margin,
    textAlign: 'center',
  },
  sectionTitle: {
    ...FONTS.h2,
    color: COLORS.third,
    fontWeight: 'bold',
    marginBottom: SIZES.margin,
    textAlign: 'center',
  },
  visionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.padding,
    borderWidth: 2,
    borderRadius: SIZES.radius,
    borderColor: COLORS.primary,
    marginBottom: SIZES.margin,
  },
  goalContainer: {
    flexDirection: 'row',
    height: RFValue(80),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    borderWidth: 2,
    borderRadius: SIZES.radius,
    borderColor: COLORS.primary,
  },
  textCenter: {
    ...FONTS.h3,
    textAlign: 'center',
    lineHeight: 25,
  },
});
