import { StyleSheet } from 'react-native';

export const MovieCardStyles = StyleSheet.create({
  headers: {
    fontWeight: 'bold',
    color: '#c9c9c9',
    textAlign: 'center',
  },
  text: {
    color: '#c9c9c9',
    padding: 15,
    fontSize: 15,
  },
  textMap: {
    color: '#c9c9c9',
  },
  viewInfo: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '95%',
    flexWrap: 'wrap',
  },
  viewGenres: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
