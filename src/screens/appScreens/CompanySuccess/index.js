import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import { Header, IconButton } from '../../../components';
import { COLORS, SIZES, icons } from '../../../constants';
import { RFValue } from 'react-native-responsive-fontsize';
import styles from './CompanySuccess.styles';
import LoadComponent from '../../../components/LoadComponent';  
import NoInternet from '../../../components/NoInternet';

const AnimatedView = Animatable.createAnimatableComponent(View);

const CompanySuccess = ({ navigation }) => {
    const [successStories, setSuccessStories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [connectionStatus, setConnectionStatus] = useState(true);

    useEffect(() => {
        setLoading(true);
        const unsubscribe = NetInfo.addEventListener(state => {
            setConnectionStatus(state.isInternetReachable);
            setLoading(false);
        });
        getSelectSuccesses();
        return () => unsubscribe();
    }, []);

    const getSelectSuccesses = () => {
        setLoading(true);
        axios.get("https://api.npoint.io/6061032e176022920284")
            .then((res) => setSuccessStories(res.data.message))
            .catch(error => console.error('Error fetching successes:', error))
            .finally(() => setLoading(false));
    };

    const renderHeader = () => (
        <Header
            title="نجاحات الشركة"
            containerStyle={{ height: RFValue(65), alignItems: "center", paddingHorizontal: SIZES.base }}
            twoRight={true}
            fill={true}
            leftComponent={
                <IconButton
                    icon={icons.back}
                    containerStyle={styles.backButton}
                    iconStyle={{ width: 20, height: 20 }}
                    onPress={() => navigation.goBack()}
                />
            }
            rightComponent={<View style={{ width: 40 }} />}
        />
    );

    const renderSuccessStory = ({ item }) => (
        <AnimatedView animation="fadeInUp" duration={1000} delay={500} style={styles.storyCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>المميزات:</Text>
                {item.features.map((benefit, index) => (
                    <Text key={index} style={styles.text}>- {benefit}</Text>
                ))}
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>النتائج:</Text>
                {Object.entries(item.results).map(([key, value]) => (
                    <Text key={key} style={styles.text}>- {value} {key.replace(/_/g, ' ').toLowerCase()}</Text>
                ))}
            </View>
            <Text style={styles.sectionTitle}>الآراء:</Text>
            {item.opinions.length > 0 ? (
                item.opinions.map((opinion, index) => (
                    <Text key={index} style={styles.text}>{opinion}</Text>
                ))
            ) : (
                <Text style={styles.text}>لا توجد آراء حاليًا</Text>
            )}
        </AnimatedView>
    );

    return (
        <View style={styles.container}>
            {renderHeader()}
            {connectionStatus ? (loading ? <LoadComponent /> : 
                <FlatList data={successStories} keyExtractor={(item) => item.successes_id.toString()} renderItem={renderSuccessStory} />
            ) : <NoInternet />}
        </View>
    );
};

export default CompanySuccess;
