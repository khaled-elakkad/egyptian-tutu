import React from 'react';
import {ViroARSceneNavigator} from '@viro-community/react-viro';
import MainScene from '../components/MainScene';

function Camera({navigation}) {
  return (
    <ViroARSceneNavigator
      initialScene={{scene: MainScene}}
      styles={{flex: 1}}
    />
  );
}

export default Camera;
