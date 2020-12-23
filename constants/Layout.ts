import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};

// Note: experimental feature
const maxWidth = 420;
const maxHeight = 900;

export function max(max: number) {
  const percentage = (width / maxWidth + height / maxHeight) / 2;
  return max * percentage;
}
