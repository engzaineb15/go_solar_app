import React, { useRef, useState } from 'react';
import { View, Text, Animated, FlatList ,StyleSheet} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch } from 'react-redux';
import { TextButton } from '../components';
import { COLORS, FONTS, lotties, SIZES } from '../constants';
import { modifyIsFirst } from '../redux/reducers/UserReducer';
import Auth from '../Services';

const Onboarding = () => {
  const dispatch = useDispatch();
  const flatListRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  const onboardingScreens = [
    {
      id: 1,
      image: lotties.intro1,
      title: 'نحن حولك في كل مكان',
      description: 'الوصول بسهولة لنقاط الشحن الخاصة في كل المناطق المحيطة بك',
    },
    {
      id: 2,
      image: lotties.intro2,
      title: 'مصدرك الدائم للطاقة',
      description: 'نحن بجانبك مهما اختلف الوقت والمكان ونوع الوقود',
    },
    {
      id: 3,
      image: lotties.intro3,
      title: 'نصلك أينما كنت',
      description: 'نوفر مجموعة من الخدمات المتميزة التي توفر كل أنواع الوقود من أجلك',
    },
  ];

  const onViewChangeRef = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]?.index || 0);
  });

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View style={styles.dotsContainer}>
        {onboardingScreens.map((_, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.primaryLite, COLORS.primary, COLORS.primaryLite],
            extrapolate: 'clamp',
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: 'clamp',
          });

          return <Animated.View key={index} style={[styles.dot, { width: dotWidth, backgroundColor: dotColor }]} />;
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          data={onboardingScreens}
          keyExtractor={(item) => `${item.id}`}
          scrollEventThrottle={16}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
          onViewableItemsChanged={onViewChangeRef.current}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <AnimatedLottieView source={item.image} style={styles.image} loop autoPlay resizeMode="contain" />
            </View>
          )}
        />
      </View>

      <View style={styles.bottomContainer}>
        <Dots />
        <Text style={styles.title}>{onboardingScreens[currentIndex].title}</Text>
        <Text style={styles.description}>{onboardingScreens[currentIndex].description}</Text>

        <View style={styles.buttonsContainer}>
          {currentIndex < onboardingScreens.length - 1 ? (
            <>
              <TextButton label="تخطى" buttonContainerStyle={styles.skipButton} labelStyle={styles.skipLabel} onPress={async () => {
                dispatch(modifyIsFirst(false));
                await Auth.setFirst('1');
              }} />
              <TextButton label="التالي" buttonContainerStyle={styles.nextButton} labelStyle={styles.nextLabel} onPress={() => {
                flatListRef.current.scrollToIndex({ index: currentIndex + 1, animated: true });
              }} />
            </>
          ) : (
            <TextButton label="إبدأ" buttonContainerStyle={styles.startButton} labelStyle={styles.nextLabel} onPress={async () => {
              dispatch(modifyIsFirst(false));
              await Auth.setFirst('1');
            }} />
          )}
        </View>
      </View>
    </View>
  );
};

export default Onboarding;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  topContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryLite,
  },
  imageContainer: {
    width: SIZES.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
});
