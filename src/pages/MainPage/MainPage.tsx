import React from 'react';
import { View, Text } from 'react-native';
import Loading from '../../components/loadingScreen';
import useMuviesApiCall from '../../hooks/apiCalls/useMuviesApi';
import MuvieVisual from '../../components/MuvieVisual/muvieVisual';
import { mainPageTypes } from './MainPageTypes';
import mainPageStyles from './MainPageStyles';
import { ScrollView } from 'react-native-gesture-handler';

const MainPage = ({ navigation }) => {
  mainPageTypes;
  const { isLoaded, muviesData } = useMuviesApiCall();

  return (
    <ScrollView style={mainPageStyles.main_view}>
      {isLoaded ? (
        <MuvieVisual muvies={muviesData.carousels} navigation={navigation} />
      ) : (
        <Loading />
      )}
    </ScrollView>
  );
};

export default MainPage;
