import React, {  useState } from 'react';
import { View, Text, ScrollView, Image, ActivityIndicator } from 'react-native';
import { Header } from '../../../components';
import { COLORS, FONTS, icons, images, SIZES, lotties } from '../../../constants';
import * as Animatable from 'react-native-animatable';
import getvisionGoals from '../../../redux/reducers/Functions/visionGoalsReducer';
import LoadComponent from '../../../components/LoadComponent';
import NoInternet from '../../../components/NoInternet';
import styles from './styles';

const AboutCompany = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [connection_Status, setConnection_Status] = useState(true);
  const [myOptions, setMyOptions] = useState({});

  useEffect(() => {
    getVisionGoals();
  }, []);

  const renderHeader = () => (
    <Header title={'عن الشركة'} containerStyle={styles.headerContainer} twoRight={true} fill={true} />
  );

  const renderMyFuel = () => (
    <View>
      <Text style={styles.title}>جو سولار</Text>
      <Text style={styles.subtitle}>العبور شارع البستان الحي التاسع القليوبية</Text>

      <Text style={styles.sectionTitle}>الرؤية</Text>
      <Animatable.View animation="fadeInUp" useNativeDriver>
        <View style={styles.visionContainer}>
          <Text style={styles.textCenter}>{myOptions.vision}</Text>
        </View>
      </Animatable.View>

      <Text style={styles.sectionTitle}>الأهداف</Text>
      {myOptions.goals &&
        myOptions.goals.map((goal, index) => (
          <Animatable.View key={index} animation="fadeInUp" delay={index * 100} useNativeDriver>
            <View style={styles.goalContainer}>
              <Text style={styles.textCenter}>{goal.goal}</Text>
            </View>
          </Animatable.View>
        ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}

      {connection_Status ? (
        <>
          {loading ? (
            <LoadComponent />
          ) : (
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
              <Image source={images.mainLogo} style={styles.mainImage} resizeMode="contain" />
              {renderMyFuel()}
            </ScrollView>
          )}
        </>
      ) : (
        <NoInternet />
      )}
    </View>
  );
};

export default AboutCompany;
