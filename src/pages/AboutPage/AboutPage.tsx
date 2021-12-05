import { Text, Image } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { AboutPageStyles } from './AboutPageStyles';
import MuvieCard from '../../components/MuvieCard/MuvieCard';

const AboutPage = ({ navigation, route }) => {
  const muvieInfo = route.params.muvieInfo;

  changeTitle({ navigation, muvieInfo });

  return (
    <ScrollView style={AboutPageStyles.screen}>
      <Image
        style={AboutPageStyles.image}
        source={{ uri: muvieInfo.posterUrl }}
      />

      <MuvieCard
        plot={muvieInfo.plot}
        year={muvieInfo.year}
        duration={muvieInfo.duration}
        genres={muvieInfo.genres}
        director={muvieInfo.director}
        actors={muvieInfo.actors}
      />
    </ScrollView>
  );
};

const changeTitle = ({ navigation, muvieInfo }) => {
  setTimeout(() => {
    navigation.setOptions({ title: muvieInfo.title });
  }, 100);
};
export default AboutPage;
