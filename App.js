import React, {useState, useEffect, useRef} from 'react';
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

// class ImageToVideo extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

const ImageToVideo = () => {
  const [isPaused, setIsPaused] = useState(true);

  ViroMaterials.createMaterials({
    wood: {
      diffuseTexture: require('./assets/texture.jpeg'),
    },
  });

  ViroARTrackingTargets.createTargets({
    targetOne: {
      source: require('./assets/chocolate.jpeg'),
      orientation: 'Up',
      physicalWidth: 0.08, // real world width in meters
    },
  });

  const handleAnchorUpdate = ({trackingMethod}) => {
    if (trackingMethod === 'tracking') {
      setIsPaused(false);
    } else {
      setIsPaused(true);
    }
  };
  return (
    <ViroARImageMarker
      target={'targetOne'}
      onAnchorUpdated={handleAnchorUpdate}>
      <ViroVideo
        source={require('./assets/believer.mp4')}
        height={0.05}
        width={0.08}
        loop={true}
        position={[0, 0, 0]}
        transformBehaviors={['billboard']}
        paused={isPaused}
      />
    </ViroARImageMarker>
  );
};

const InitialScene = () => {
  return (
    <ViroARScene>
      <ImageToVideo />
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
