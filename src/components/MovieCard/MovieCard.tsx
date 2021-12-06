import React from 'react';
import { Text, View } from 'react-native';
import { MovieCardStyles } from './MovieCardStyles';

const MovieCard = ({
  plot,
  year,
  duration,
  genres,
  actors,
  director,
}: MovieCardProps): React.ReactElement => {
  return (
    <View>
      <GenresMap genres={genres} />
      <View style={MovieCardStyles.viewInfo}>
        <Text style={MovieCardStyles.headers}>
          duration: {duration} min, year: {year}
        </Text>
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <Text style={MovieCardStyles.text}>{plot}</Text>
          <Text style={MovieCardStyles.text}>
            <Text style={MovieCardStyles.headers}>director:</Text> {director}
          </Text>
          <Text style={MovieCardStyles.text}>
            <Text style={MovieCardStyles.headers}>actors:</Text> {actors}
          </Text>
        </View>
      </View>
    </View>
  );
};
const GenresMap = ({
  genres,
}: {
  genres: Array<string>;
}): React.ReactElement => {
  return (
    <View style={MovieCardStyles.viewGenres}>
      {genres.map((genres) => {
        return (
          <Text key={genres} style={MovieCardStyles.textMap}>
            {genres}
          </Text>
        );
      })}
    </View>
  );
};
interface MovieCardProps {
  plot: string;
  year: string;
  duration: string;
  genres: Array<string>;
  director: string;
  actors: string;
}

export default MovieCard;
