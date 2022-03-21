import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

import {PADDING_HORIZONTAL, PADDING_VERTICAL} from '../layout';

function QuestionItem({
  id,
  questionText,
  firstChoice,
  fourthChoice,
  secondChoice,
  thirdChoice,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.box]}>
      <Text>{questionText}</Text>
      <Ionicon name={'help-circle'} size={24} color="orange" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    height: 42,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingVertical: PADDING_VERTICAL,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    alignItems: 'center',
  },
  unlockedBox: {
    borderColor: 'rgba(0, 0, 0, 1)',
  },
  lockedBox: {
    borderColor: 'rgba(0, 0, 0, 0.4)',
  },
  lockedText: {color: 'rgba(0, 0, 0, 0.4)'},
});

export default QuestionItem;
