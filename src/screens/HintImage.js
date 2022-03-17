import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {PADDING_HORIZONTAL, PADDING_VERTICAL} from '../layout';
import {getHeightFromScreenWidth} from '../utils';

function HintImage({route, navigation}) {
  const {title, imageDetails} = route.params;
  const {
    mediaItemUrl,
    mediaDetails: {height, width},
  } = imageDetails;
  console.log({height, width});
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.frame}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicon name="close-circle" color={'white'} size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: mediaItemUrl}}
            style={[
              // {height: `${Math.min(getHeightPercent(height, width), 90)}%`},
              {height: getHeightFromScreenWidth(height, width)},
              styles.img,
            ]}
          />
        </View>
        <View style={styles.frame}>
          <Text style={styles.white}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  frame: {
    flex: 0.05,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingVertical: PADDING_VERTICAL,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imageContainer: {flex: 0.9, justifyContent: 'center'},
  img: {
    width: '100%',
  },
  white: {color: '#fff'},
});

export default HintImage;
