import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroVideo,
  ViroImage,
  ViroText,
} from '@viro-community/react-viro';
import {getHeightFromParams} from '../utils';

function createImageTarget(name, source_uri, physicalWidth) {
  let targetName = name;
  let targets = {};
  targets[targetName] = {
    source: {uri: source_uri},
    orientation: 'Up',
    physicalWidth,
  };

  ViroARTrackingTargets.createTargets(targets);
}

const PointOfInterest = ({poiData, id}) => {
  const {targetImage, arType, width, layout, arVideo, arImage, arText} =
    poiData;

  const targetName = 'target' + id;
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    createImageTarget(targetName, targetImage.mediaItemUrl, width);
  }, []);

  const handleAnchorUpdate = ({trackingMethod}) => {
    if (trackingMethod === 'tracking') {
      setIsPaused(false);
    } else {
      setIsPaused(true);
    }
  };

  if (arType === 'Video') {
    return (
      <ViroARImageMarker
        target={targetName}
        onAnchorUpdated={handleAnchorUpdate}>
        <ViroVideo
          source={{uri: arVideo.mediaItemUrl}}
          height={getHeightFromParams(layout, width)}
          width={width}
          loop={true}
          position={[0, 0, 0]}
          transformBehaviors={['billboard']}
          paused={isPaused}
        />
      </ViroARImageMarker>
    );
  }

  if (arType === 'Image') {
    return (
      <ViroARImageMarker
        target={targetName}
        onAnchorUpdated={handleAnchorUpdate}>
        <ViroImage
          source={{uri: arImage.mediaItemUrl}}
          height={getHeightFromParams(layout, width)}
          width={width}
          position={[0, 0, 0]}
          transformBehaviors={['billboard']}
        />
      </ViroARImageMarker>
    );
  }

  return (
    <ViroARImageMarker target={targetName} onAnchorUpdated={handleAnchorUpdate}>
      <ViroText
        text={arText}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, 0]}
        style={styles.helloWorldTextStyle}
        transformBehaviors={['billboard']}
        width={width}
      />
    </ViroARImageMarker>
  );
};

const styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 8,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default PointOfInterest;
