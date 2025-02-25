import React from 'react';
import { View, Text, Modal, TouchableOpacity,StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { lotties, FONTS, COLORS } from '../constants';
import { Button } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch } from 'react-redux';
import { modifyAlertModal } from '../redux/reducers/UserReducer';
import styles from '../styles/AlertModalStyles';
const AlertModal = ({ visableAlertModal, message, res }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(modifyAlertModal({ show: false, message: null, res: null }));
  };

  return (
    <Modal
      visible={visableAlertModal}
      transparent={true}
      onRequestClose={closeModal}
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.touchableBackground}
          onPress={closeModal}
        />
        <View style={styles.modalContainer}>
          <LottieView
            source={res === 'succ' ? lotties.done : lotties.error}
            autoPlay
            loop
            style={styles.lottie}
            resizeMode="contain"
          />
          <Text style={styles.message}>{message}</Text>
          <Button
            mode="contained"
            buttonColor={res === 'succ' ? COLORS.primary : COLORS.red}
            onPress={closeModal}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            إغلاق
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;


const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContainer: {
    width: 350,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  lottie: {
    height: 100,
    width: '100%',
  },
  message: {
    fontSize: 20,
    fontFamily: FONTS.fontFamily,
  },
  button: {
    marginTop: RFValue(10),
    width: '90%',
  },
  buttonLabel: {
    fontFamily: FONTS.fontFamily,
    color: '#000',
  },
});


