import React from 'react';
import { View, Text } from 'react-native';
import Loading from '../../components/loadingScreen';
import useMuviesApiCall from '../../hooks/apiCalls/muviesApi';
import MuvieVisual from '../../components/muvieVisual';
import { mainPageTypes } from './MainPageTypes';
import mainPageStyles from './MainPageStyles';

const MainPage = ({ navigation }) => {
  mainPageTypes;
  const { isLoaded, muviesData } = useMuviesApiCall();

  return (
    <View style={mainPageStyles.main_view}>
      <Text style={mainPageStyles.main_text}>Choose your favorite muvie</Text>
      {isLoaded ? <MuvieVisual muvies={muviesData} /> : <Loading />}
    </View>
  );
};

export default MainPage;
