import {mediaLayout} from './constants';

export const getHeightFromParams = (layout, actualWidth) => {
  const {height, width} = mediaLayout[layout];
  return (actualWidth * height) / width;
};
