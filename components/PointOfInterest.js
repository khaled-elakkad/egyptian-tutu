import React, {useState, useEffect} from 'react';
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
    source: source_uri,
    orientation: 'Up',
    physicalWidth,
  };

  ViroARTrackingTargets.createTargets(targets);
}

const PointOfInterest = ({poiData}) => {
  const {id, targetSource, targetWidth, displayData} = poiData;
  const {type} = displayData;
  const targetName = 'target' + id;
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    createImageTarget(targetName, targetSource, targetWidth);
  }, []);

  // const betengana = {
  //   [targetName]: {
  //     // source: {uri: targetSource},
  //     //source: require('../assets/chocolate.jpeg'),
  //     source: targetSource,
  //     orientation: 'Up',
  //     physicalWidth: targetWidth, // real world width in meters
  //   },
  // };

  // ViroARTrackingTargets.createTargets(betengana);

  const handleAnchorUpdate = ({trackingMethod}) => {
    console.log('trackingMethod', targetSource, trackingMethod);
    // if (trackingMethod === 'tracking') {
    //   setIsPaused(false);
    // } else {
    //   setIsPaused(true);
    // }
  };

  if (type === 'video') {
    const {sourceUrl, layout} = displayData;
    return (
      <ViroARImageMarker
        target={targetName}
        onAnchorUpdated={handleAnchorUpdate}>
        <ViroVideo
          // source={{uri: sourceUrl}}
          // source={require('../assets/mug.jpg')}
          source={sourceUrl}
          height={getHeightFromParams(layout, targetWidth)}
          width={targetWidth}
          loop={true}
          position={[0, 0, 0]}
          transformBehaviors={['billboard']}
          paused={isPaused}
        />
      </ViroARImageMarker>
    );
  }

  if (type === 'img') {
    const {sourceUrl, layout} = displayData;
    return (
      <ViroARImageMarker
        target={targetName}
        onAnchorUpdated={handleAnchorUpdate}>
        <ViroImage
          // source={{uri: sourceUrl}}
          // source={require('../assets/mug.jpg')}
          source={sourceUrl}
          height={getHeightFromParams(layout, targetWidth)}
          width={targetWidth}
          position={[0, 0, 0]}
          transformBehaviors={['billboard']}
        />
      </ViroARImageMarker>
    );
  }
  return (
    <ViroARImageMarker target={targetName} onAnchorUpdated={handleAnchorUpdate}>
      <ViroText
        text={displayData.textString || 'hello world'}
        textAlign="left"
        textAlignVertical="top"
        textLineBreakMode="Justify"
        textClipMode="ClipToBounds"
        color="#ff0000"
        width={2}
        height={2}
        style={{
          fontFamily: 'Arial',
          fontSize: 20,
          fontWeight: '400',
          fontStyle: 'italic',
          color: '#0000FF',
        }}
        position={[0, 0, 0]}
      />
    </ViroARImageMarker>
  );
};

export default PointOfInterest;
