import React from 'react';
import { View, Text } from 'react-native';
import Loading from '../../components/LoadingScreen';
import useMoviesApiCall from '../../hooks/apiCalls/useMoviesApi';
import MuvieView from '../../components/MovieVisual';
import MainScreenStyles from './MainScreentyles';
import { ScrollView } from 'react-native-gesture-handler';

const MainScreen = ({ navigation }: { navigation: { navigate: Function } }) => {
  const { isLoaded, moviesData } = useMoviesApiCall();

  return (
    <ScrollView style={MainScreenStyles.main_view}>
      {isLoaded ? (
        <MuvieView muvies={moviesData.carousels} navigation={navigation} />
      ) : (
        <Loading />
      )}
    </ScrollView>
  );
};

export default MainScreen;
