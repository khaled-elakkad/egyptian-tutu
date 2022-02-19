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
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroVideo,
} from '@viro-community/react-viro';

const InitialScene = () => {
  const [muted, setMuted] = useState(false);
  ViroMaterials.createMaterials({
    wood: {
      diffuseTexture: require('./assets/texture.jpeg'),
    },
  });
  // ViroAnimations.registerAnimations({
  //   rotate: {
  //     duration: 2500,
  //     properties: {rotateY: '+=90'},
  //   },
  // });
  ViroARTrackingTargets.createTargets({
    targetOne: {
      source: require('./assets/chocolate.jpeg'),
      orientation: 'Up',
      physicalWidth: 0.08, // real world width in meters
    },
  });
  return (
    <ViroARScene>
      {/* <ViroBox
        height={2}
        length={2}
        width={2}
        position={[0, -1, -1]}
        scale={[0.2, 0.2, 0.2]}
        materials={['wood']}
        animation={{name: 'rotate', loop: true, run: true}}
      /> */}
      <ViroARImageMarker
        target={'targetOne'}
        onAnchorFound={() => {
          console.log('found');
          setMuted(false);
        }}
        onAnchorRemoved={() => {
          console.log('removed');
          setMuted(true);
        }}>
        {/* <ViroBox
          height={2}
          length={2}
          width={2}
          position={[0, 0, 0]}
          scale={[0.2, 0.2, 0.2]}
          materials={['wood']}
          animation={{name: 'rotate', loop: true, run: true}}
        /> */}
        <ViroVideo
          source={require('./assets/believer.mp4')}
          height={0.05}
          width={0.08}
          loop={true}
          position={[0, 0, 0]}
          muted={muted}
          transformBehaviors={['billboard']}
        />
      </ViroARImageMarker>
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
