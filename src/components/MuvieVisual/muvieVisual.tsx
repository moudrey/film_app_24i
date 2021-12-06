import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { muvieVisual_styles } from './muvieVisualStyles';
import CustomCarousel from './CustomCarousel';

const MuvieVisual = ({
  muvies,
  navigation,
}: MuvieVisualProps): React.ReactElement => {
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

interface MuvieVisualProps {
  muvies: any;
  navigation: { navigate: Function };
}

export default MuvieVisual;

// Maps of each part of page

let posterArray = [];

const EachCarouselsMap = ({
  carouselsTitle,
  carouselsItem,
  navigation,
}: EachCarouselsMapProps): React.ReactElement => {
  return (
    <View>
      <Text style={muvieVisual_styles.title}>{carouselsTitle}</Text>

      {carouselsItem.map((muvie) => {
        posterArray.push(muvie.posterUrl);
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
