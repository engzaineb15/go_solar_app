import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.lightGray,
  },
  authWrapper: { alignSelf: 'center', marginTop: SIZES.padding },
  authContainer: {
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.light,
  },
  authTitle: { width: '60%', lineHeight: 45, color: COLORS.darkBlue, ...FONTS.h2 },
  inputContainer: { marginTop: SIZES.radius, borderRadius: SIZES.radius, backgroundColor: COLORS.error },
  icon: { width: 25, height: 24, marginRight: SIZES.base },
  button: { height: 55, borderRadius: SIZES.radius, backgroundColor: COLORS.primary, marginTop: SIZES.padding },
});
