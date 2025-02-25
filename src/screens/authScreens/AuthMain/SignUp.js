import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { FormInput, IconButton, TextButton, CheckBox } from '../../components';
import FastImage from 'react-native-fast-image';
import { COLORS, FONTS, SIZES, icons } from '../../constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import utils from '../../utils';
import styles from '../../screens/Auth/styles';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const handleSignUp = async () => {
    if (email === 'adel@gmail.com') {
      let uData = {
        user_id: 1,
        user_name: name,
        user_email: email,
        user_password: password,
        user_phone: phone,
      };
      navigation.navigate('SignOTP', { uData });
    } else {
      utils.toastAlert('error', 'برجاء إدخال بريد إلكترونى صحيح');
    }
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>إنشاء حساب جديد</Text>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <FormInput
          containerStyle={styles.inputContainer}
          placeholder="الإسم"
          value={name}
          onChange={setName}
          prependComponent={<FastImage source={icons.person} style={styles.icon} />}
        />
        <FormInput
          containerStyle={styles.inputContainer}
          keyboardType="email-address"
          placeholder="البريد الإلكترونى"
          value={email}
          onChange={setEmail}
          prependComponent={<FastImage source={icons.email} style={styles.icon} />}
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
        <CheckBox containerStyle={styles.checkBox} isSelected={termsChecked} onPress={() => setTermsChecked(!termsChecked)} />
      </KeyboardAwareScrollView>
      <TextButton label="إنشاء الحساب" buttonContainerStyle={styles.button} onPress={handleSignUp} />
    </View>
  );
};

export default SignUp;
