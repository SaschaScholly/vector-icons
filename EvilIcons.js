import glyphMap from 'react-native-vector-icons/glyphmaps/EvilIcons.json';
import createIconSet from './createIconSet';

export default createIconSet(
  glyphMap,
  'evilicons',
  require('./fonts/EvilIcons.ttf')
);
