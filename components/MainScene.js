import React from 'react';
// import {gql, useQuery} from '@apollo/client';
import {ViroARScene} from '@viro-community/react-viro';
import PointOfInterest from './PointOfInterest';
import pointsOfInterest from '../data';

// const GET_POSTS = gql`
//     query MyQuery {
//       posts {
//         edges {
//           node {
//             title
//             featuredImage {
//               node {
//                 sourceUrl
//               }
//             }
//           }
//         }
//       }
//     }
//   `;

const MainScene = () => {
  //   const {loading, error, data} = useQuery(GET_POSTS);

  return (
    <ViroARScene>
      {/* {pointsOfInterest.map(poi => ( */}
      <PointOfInterest poiData={pointsOfInterest[1]} />
      {/* ))} */}
    </ViroARScene>
  );
};

export default MainScene;
