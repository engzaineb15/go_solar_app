import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { MotiView, useAnimationState } from 'moti';
import { SIZES, COLORS, images } from '../../../constants';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/reducers/UserReducer';
import Auth from '../../../Services';
import SignIn from '../../../components/Auth/SignIn';
import SignUp from '../../../components/Auth/SignUp';
import AuthFooter from '../../../components/Auth/AuthFooter';
import SocialLogin from '../../../components/Auth/SocialLogin';
import styles from './styles';

const AuthMain = ({ navigation }) => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState('signIn');
  
  // Animation State
  const animationState = useAnimationState({
    signIn: { height: SIZES.height * 0.5 },
    signUp: { height: SIZES.height * 0.65 },
  });

  useEffect(() => {
    animationState.transitionTo('signIn');
  }, []);

  return (
    <View style={styles.container}>
      <FastImage source={images.main_logo_full} style={styles.logo} />
      <MotiView state={animationState} style={styles.authWrapper}>
        {mode === 'signIn' ? <SignIn dispatch={dispatch} /> : <SignUp navigation={navigation} />}
      </MotiView>
      <AuthFooter mode={mode} setMode={setMode} animationState={animationState} />
      {mode === 'signIn' && <SocialLogin />}
    </View>
  );
};

export default AuthMain;
