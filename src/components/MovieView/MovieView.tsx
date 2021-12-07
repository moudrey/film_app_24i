import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { movieVisual_styles } from './MovieViewStyles';
import CustomCarousel from '../CustomCarousel/CustomCarousel';

const MovieView = ({
  muvies,
  navigation,
}: MuvieViewProps): React.ReactElement => {
  return muvies.map(
    ({
      title,
      items,
    }: {
      title: string;
      items: Array<{ posterUrl: string }>;
    }) => {
      return (
        <EachCarouselsMap
          key={title}
          carouselsTitle={title}
          carouselsItem={items}
          navigation={navigation}
        />
      );
    }
  );
};

interface MuvieViewProps {
  muvies: any;
  navigation: { navigate: Function };
}

export default MovieView;

// Maps of each part of page

let posterArray = [];

const EachCarouselsMap = ({
  carouselsTitle,
  carouselsItem,
  navigation,
}: EachCarouselsMapProps): React.ReactElement => {
  return (
    <View>
      <Text style={movieVisual_styles.title}>{carouselsTitle}</Text>

      {carouselsItem.map((movie) => {
        posterArray.push(movie.posterUrl);
      })}

      <CustomCarousel
        posterArray={posterArray}
        navigation={navigation}
        muvieInfo={carouselsItem}
      />

      {(posterArray = [])}
    </View>
  );
};

interface EachCarouselsMapProps {
  carouselsTitle: string;
  carouselsItem: Array<{ posterUrl: string }>;
  navigation: { navigate: Function };
}
