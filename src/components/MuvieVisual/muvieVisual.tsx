import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { muvieVisual_styles } from './muvieVisualStyles';
import CustomCarousel from './CustomCarousel';

const MuvieVisual = ({ muvies, navigation }) => {
  return muvies.map((carousels) => {
    return (
      <EachCarouselsMap
        key={carousels.title}
        carouselsTitle={carousels.title}
        carouselsItem={carousels.items}
        navigation={navigation}
      />
    );
  });
};

export default MuvieVisual;

// Maps of each part of page

let posterArray = [];

const EachCarouselsMap = ({ carouselsTitle, carouselsItem, navigation }) => {
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
