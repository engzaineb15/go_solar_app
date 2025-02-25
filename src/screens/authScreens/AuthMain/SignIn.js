import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { FormInput, IconButton, TextButton } from '../../components';
import FastImage from 'react-native-fast-image';
import { COLORS, FONTS, SIZES, icons } from '../../constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import utils from '../../utils';
import styles from '../../screens/Auth/styles';

const SignIn = ({ dispatch }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleSignIn = async () => {
    if (phone === '010101010' && password === '123') {
      let uData = {
        user_id: 1,
        user_name: 'عادل الخميسى',
        user_email: 'adel@gmail.com',
        user_password: '123',
        user_phone: '01012312231',
      };
      dispatch(setUser(uData));
      await Auth.setAccount(uData);
    } else {
      utils.toastAlert('error', 'بيانات الدخول غير صحيحة');
    }
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>تسجيل الدخول للمتابعة</Text>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <FormInput
          containerStyle={styles.inputContainer}
          keyboardType="phone-pad"
          placeholder="رقم الهاتف"
          value={phone}
          onChange={setPhone}
          prependComponent={<FastImage source={icons.phone} style={styles.icon} />}
        />
        <FormInput
          containerStyle={styles.inputContainer}
          placeholder="كلمة المرور"
          value={password}
          secureTextEntry={!isVisible}
          onChange={setPassword}
          prependComponent={<FastImage source={icons.lock} style={styles.icon} />}
          appendComponent={
            <IconButton icon={isVisible ? icons.eye : icons.eye_off} onPress={() => setIsVisible(!isVisible)} />
          }
        />
      </KeyboardAwareScrollView>
      <TextButton label="تسجيل الدخول" buttonContainerStyle={styles.button} onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
