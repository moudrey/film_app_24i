import { View, ActivityIndicator } from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View>
      <ActivityIndicator
        style={{ marginTop: '50%' }}
        size="large"
        color="white"
      />
    </View>
  );
};

export default Loading;
