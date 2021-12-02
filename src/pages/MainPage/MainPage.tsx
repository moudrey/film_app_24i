import React from 'react';
import { View, Text } from 'react-native';
import Loading from '../../components/loadingScreen';
import useMuviesApiCall from '../../hooks/apiCalls/muviesApi';
import MuvieVisual from '../../components/muvieVisual';
import { mainPageTypes } from './MainPageTypes';

const MainPage = ({ navigation }) => {
  mainPageTypes;
  const { isLoaded, muviesData } = useMuviesApiCall();

  return (
    <View>
      <Text>Choose your favorite muvie</Text>
      {isLoaded ? <MuvieVisual muvies={muviesData} /> : <Loading />}
    </View>
  );
};

export default MainPage;
