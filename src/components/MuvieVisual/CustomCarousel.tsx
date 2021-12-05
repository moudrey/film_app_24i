import Carousel from 'react-native-snap-carousel';
import { Dimensions, Image, TouchableHighlight } from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;

const CustomCarousel = ({ posterArray, navigation, muvieInfo }) => {
  return (
    <Carousel
      sliderWidth={windowWidth}
      itemWidth={220}
      data={posterArray}
      keyExtractor={(_, index) => index.toString()}
      renderItem={(item) => {
        return (
          <TouchableHighlight
            onPress={() => {
              navigation.navigate('About', {
                muvieInfo: muvieInfo[item.index],
              });
            }}
          >
            <Image
              source={{ uri: item.item }}
              style={{ width: 220, height: 280, resizeMode: 'cover' }}
            />
          </TouchableHighlight>
        );
      }}
    />
  );
};

export default CustomCarousel;
