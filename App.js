import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroBox,
  ViroConstants,
  ViroARSceneNavigator,
  ViroMaterials,
  ViroAnimations,
} from '@viro-community/react-viro';

const InitialScene = () => {
  ViroMaterials.createMaterials({
    wood: {
      diffuseTexture: require('./assets/texture.jpeg'),
    },
  });
  ViroAnimations.registerAnimations({
    rotate: {
      duration: 2500,
      properties: {rotateY: '+=90'},
    },
  });
  return (
    <ViroARScene>
      {/* <ViroText
        text="Hello World"
        position={[0, 2, -5]}
        styles={{fontSize: '30'}}
      /> */}
      <ViroBox
        height={2}
        length={2}
        width={2}
        position={[0, -1, -1]}
        scale={[0.2, 0.2, 0.2]}
        materials={['wood']}
        animation={{name: 'rotate', loop: true, run: true}}
      />
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      initialScene={{scene: InitialScene}}
      styles={{flex: 1}}
    />
  );
};

var styles = StyleSheet.create({});
