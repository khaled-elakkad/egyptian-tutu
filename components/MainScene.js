import React from 'react';
import {StyleSheet} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import {ViroARScene, ViroText} from '@viro-community/react-viro';
import PointOfInterest from './PointOfInterest';

const GET_TARGETS = gql`
  query MyQuery {
    targets {
      nodes {
        id
        customtargets {
          arText
          arType
          arImage {
            mediaItemUrl
          }
          arVideo {
            mediaItemUrl
          }
          layout
          width
          targetImage {
            mediaItemUrl
            title
            id
          }
        }
      }
    }
  }
`;

const MainScene = () => {
  const {loading, error, data} = useQuery(GET_TARGETS);

  return (
    <ViroARScene>
      {loading && (
        <ViroText
          text={'loading..'}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, 0]}
          style={styles.helloWorldTextStyle}
          transformBehaviors={['billboard']}
          width={0.5}
        />
      )}
      {error && (
        <ViroText
          text={'error'}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, 0]}
          style={styles.helloWorldTextStyle}
          transformBehaviors={['billboard']}
          width={0.5}
        />
      )}
      {data &&
        data.targets.nodes.map(({id, customtargets}) => {
          return <PointOfInterest key={id} id={id} poiData={customtargets} />;
        })}
    </ViroARScene>
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

export default MainScene;
