import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {PADDING_HORIZONTAL, PADDING_VERTICAL} from '../layout';

const choicesKeys = [
  'firstChoice',
  'secondChoice',
  'thirdChoice',
  'fourthChoice',
];

const FullQuestion = ({
  id,
  questionText,
  selectedAnswer,
  onAnswerChange,
  icon,
  ...choices
}) => {
  const [value, setValue] = useState();
  console.log(value && !!choices[value].isRight);

  return (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{questionText}</Text>
      <RadioButton.Group onValueChange={onAnswerChange} value={selectedAnswer}>
        {choicesKeys.map(cKey => (
          <View key={cKey} style={styles.choice}>
            <Text>{choices[cKey].choiceText}</Text>
            <RadioButton value={cKey} />
          </View>
        ))}
      </RadioButton.Group>
      <View style={styles.iconContainer}>
        <Ionicon size={42} {...icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingVertical: PADDING_VERTICAL,
  },
  question: {marginBottom: 20, fontSize: 18, fontWeight: 'bold'},
  choice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 0.5,
  },
  iconContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});

export default FullQuestion;
