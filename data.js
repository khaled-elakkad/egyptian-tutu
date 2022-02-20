class PointOfInterest {
  constructor(id, targetSource, targetWidth, displayData) {
    this.id = id;
    this.targetSource = targetSource;
    this.targetWidth = targetWidth;
    this.displayData = displayData;
  }
}

export default [
  new PointOfInterest('0001', require('./assets/chess.jpeg'), 0.96, {
    type: 'video',
    sourceUrl: require('./assets/believer.mp4'),
    layout: 'landscape',
  }),
  new PointOfInterest(
    '0002',
    {uri: 'https://i.ibb.co/cgXBczk/chocolate.jpg'},
    0.08,
    {
      type: 'img',
      sourceUrl: require('./assets/mug.jpg'),
      layout: 'portrait',
    },
  ),
  new PointOfInterest('0003', require('./assets/flower.jpeg'), 0.12, {
    type: 'text',
    textString: 'saba7 el ward!!!!',
  }),
];

// target: targetSource, targetWidth

// displayDats:
//     type: video | text | image
//     if video: source URL, layout: landscape | portrait
//     if image: source URL, layout: landscape | portrait
//     if text: textString
