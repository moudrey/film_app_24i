import Carousel from 'react-native-snap-carousel';
import { Dimensions, Image, TouchableHighlight } from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;

const CustomCarousel = ({
  posterArray,
  navigation,
  muvieInfo,
}: CustomCarouselProps): React.ReactElement => {
  return (
    <Carousel
      sliderWidth={windowWidth}
      itemWidth={220}
      data={posterArray}
      keyExtractor={(_, index) => index.toString()}
      renderItem={(props: { index: number; item: string }) => {
        return (
          <TouchableHighlight
            onPress={() => {
              navigation.navigate('About', {
                muvieInfo: muvieInfo[props.index],
              });
            }}
          >
            <Image
              source={{ uri: props.item }}
              style={{ width: 220, height: 280, resizeMode: 'cover' }}
            />
          </TouchableHighlight>
        );
      }}
    />
  );
};

interface CustomCarouselProps {
  posterArray: Array<string>;
  navigation: { navigate: Function };
  muvieInfo: Array<{}>;
}

export default CustomCarousel;
