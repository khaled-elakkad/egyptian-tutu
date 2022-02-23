class PointOfInterest {
  constructor(id, targetSource, targetWidth, displayData) {
    this.id = id;
    this.targetSource = targetSource;
    this.targetWidth = targetWidth;
    this.displayData = displayData;
  }
}

export default [
  new PointOfInterest(
    '0001',
    'http://www.localtours.fun/ar-treasure-hunt/wp-content/uploads/2022/02/lm.png',
    0.057,
    {
      type: 'video',
      sourceUrl:
        'http://www.localtours.fun/ar-treasure-hunt/wp-content/uploads/2022/02/believer.mp4',
      layout: 'landscape',
    },
  ),
  new PointOfInterest(
    '0002',
    'http://www.localtours.fun/ar-treasure-hunt/wp-content/uploads/2022/02/karneh.jpeg',
    0.053,
    {
      type: 'img',
      sourceUrl:
        'http://www.localtours.fun/ar-treasure-hunt/wp-content/uploads/2022/02/geneh.jpeg',
      layout: 'portrait',
    },
  ),
  new PointOfInterest(
    '0003',
    'http://www.localtours.fun/ar-treasure-hunt/wp-content/uploads/2022/02/id.jpeg',
    0.053,
    {
      type: 'text',
      textString: 'ana 3amoooooor!!!!',
    },
  ),
];

// target: targetSource, targetWidth

// displayData:
//     type: video | text | image
//     if video: source URL, layout: landscape | portrait
//     if image: source URL, layout: landscape | portrait
//     if text: textString

// query MyQuery {
//   targets {
//     nodes {
//       customtargets {
//         arText
//         arType
//         arImage {
//           mediaItemUrl
//         }
//         arVideo {
//           mediaItemUrl
//         }
//         layout
//         width
//         targetImage {
//           mediaItemUrl
//           title
//           id
//         }
//       }
//     }
//   }
// }
