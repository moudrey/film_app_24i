import { Text, Image } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { DetailScreenStyles } from './DetailScreenStyles';
import MuvieCard from '../../components/MovieCard';

const DetailScreen = ({
  navigation,
  route,
}: {
  navigation: Object;
  route: { params: { muvieInfo: DetailScreenProps } };
}): React.ReactElement => {
  const muvieInfo = route.params.muvieInfo;

  changeTitle({ navigation, muvieInfo });

  return (
    <ScrollView style={DetailScreenStyles.screen}>
      <Image
        style={DetailScreenStyles.image}
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

interface DetailScreenProps {
  plot: string;
  year: string;
  duration: string;
  genres: Array<string>;
  director: string;
  actors: string;
  posterUrl: string;
}

export default DetailScreen;
