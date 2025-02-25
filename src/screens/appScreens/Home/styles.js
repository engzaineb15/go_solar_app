import { StyleSheet, Platform } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
    container: { flex: 1 },
    searchBox: {
        position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 10,
        elevation: 10,
    },
    markerWrap: { alignItems: 'center', justifyContent: 'center', width: 50, height: 50 },
    marker: { width: 30, height: 30 },
    scrollView: { position: 'absolute', bottom: RFValue(60), left: 0, right: 0, paddingVertical: 10 },
    card: { elevation: 2, backgroundColor: COLORS.white, borderRadius: 8, marginHorizontal: 10 },
    cardImage: { flex: 3, width: '100%', height: '100%', alignSelf: 'center' },
    textContent: { flex: 2, padding: 10 },
    stationName: { color: COLORS.black, fontSize: RFValue(16) },
    stationAddress: { color: COLORS.darkGray, fontSize: RFValue(14) },
});
