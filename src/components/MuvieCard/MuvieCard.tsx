import React from 'react';
import { Text, View } from 'react-native';
import { MuvieCardStyles } from './MuvieCardStyles';

const MuvieCard = ({
  plot,
  year,
  duration,
  genres,
  actors,
  director,
}: MuvieCardProps): React.ReactElement => {
  return (
    <View>
      <GenresMap genres={genres} />
      <View style={MuvieCardStyles.viewInfo}>
        <Text style={MuvieCardStyles.headers}>
          duration: {duration} min, year: {year}
        </Text>
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <Text style={MuvieCardStyles.text}>{plot}</Text>
          <Text style={MuvieCardStyles.text}>
            <Text style={MuvieCardStyles.headers}>director:</Text> {director}
          </Text>
          <Text style={MuvieCardStyles.text}>
            <Text style={MuvieCardStyles.headers}>actors:</Text> {actors}
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
    <View style={MuvieCardStyles.viewGenres}>
      {genres.map((genres) => {
        return (
          <Text key={genres} style={MuvieCardStyles.textMap}>
            {genres}
          </Text>
        );
      })}
    </View>
  );
};
interface MuvieCardProps {
  plot: string;
  year: string;
  duration: string;
  genres: Array<string>;
  director: string;
  actors: string;
}

export default MuvieCard;
