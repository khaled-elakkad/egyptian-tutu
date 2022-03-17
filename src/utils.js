import {Dimensions} from 'react-native';
import {mediaLayout} from './constants';

export const getHeightFromParams = (layout, actualWidth) => {
  const {height, width} = mediaLayout[layout];
  return (actualWidth * height) / width;
};

export const getHeightFromScreenWidth = (height, width) =>
  (Dimensions.get('window').width * height) / width;
