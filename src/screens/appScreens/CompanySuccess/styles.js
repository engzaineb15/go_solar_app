import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: SIZES.radius,
        borderColor: COLORS.gray2,
    },
    storyCard: {
        padding: 15,
        margin: 10,
        borderRadius: 8,
        backgroundColor: COLORS.white,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    description: {
        marginTop: 8,
        color: COLORS.black,
    },
    section: {
        marginTop: 8,
    },
    sectionTitle: {
        fontWeight: 'bold',
        color: COLORS.third,
    },
    text: {
        color: COLORS.black,
    },
});
