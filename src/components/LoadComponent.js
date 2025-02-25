import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const LoadComponent = () => {
  return (
    <View style={styles.centerContainer}>
      <ActivityIndicator size={35} />
    </View>
  );
};

const styles = {
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default LoadComponent;
