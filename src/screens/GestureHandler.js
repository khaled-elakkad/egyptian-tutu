import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const useFollowAnimatedPosition = ({x, y}) => {
  const followX = useDerivedValue(() => {
    return withSpring(x.value);
  });

  const followY = useDerivedValue(() => {
    return withSpring(y.value);
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: followX.value}, {translateY: followY.value}],
    };
  });
  return [followX, followY, rStyle];
};

const SCREEN_WIDTH = Dimensions.get('window').width;

const SIZE = 80;

export default function GestureHandler({navigation}) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const context = useSharedValue({x: 0, y: 0});

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {x: translateX.value, y: translateY.value};
    })
    .onUpdate(event => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    })
    .onEnd(() => {
      if (translateX.value > SCREEN_WIDTH / 2) {
        translateX.value = SCREEN_WIDTH - SIZE;
      } else {
        translateX.value = 0;
      }
    });

  const [blueFollowX, blueFollowY, rBlueStyle] = useFollowAnimatedPosition({
    x: translateX,
    y: translateY,
  });

  const [redFollowX, redFollowY, rRedStyle] = useFollowAnimatedPosition({
    x: blueFollowX,
    y: blueFollowY,
  });

  const [greenFollowX, greenFollowY, rgreenStyle] = useFollowAnimatedPosition({
    x: redFollowX,
    y: redFollowY,
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.circle, {backgroundColor: 'green'}, rgreenStyle]}
      />
      <Animated.View
        style={[styles.circle, {backgroundColor: 'red'}, rRedStyle]}
      />
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.circle, rBlueStyle]} />
      </GestureDetector>
    </View>
  );
  0;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  circle: {
    position: 'absolute',
    height: SIZE,
    aspectRatio: 1,
    backgroundColor: 'blue',
    borderRadius: SIZE / 2,
    opacity: 0.8,
  },
});
