import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  SafeAreaView,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {useQuery} from '@apollo/client';
import _ from 'lodash';
import QuestionItem from '../components/QuestionItem';
import FullQuestion from '../components/FullQuestion';
import {HINTS} from '../graphql/queries';
import {answerIcons} from '../constants';

import {PADDING_HORIZONTAL, PADDING_VERTICAL} from '../layout';

function QuestionsList({navigation}) {
  const {loading, error, data} = useQuery(HINTS, {fetchPolicy: 'cache-only'});

  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['60%', '80%'], []);
  const handleSheetChanges = useCallback(index => {
    if (index === -1) {
      setSelectedQuestion(null);
      setSelectedAnswer(null);
    }
  }, []);

  const onAnswerChange = newAnswer => {
    setSelectedAnswer(newAnswer);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={[styles.container, loading && styles.loading]}>
        {loading && <ActivityIndicator />}
        {error && <Text>Error! Please check the logs</Text>}
        {data && (
          <FlatList
            data={data.hints.nodes
              .filter(({customhints}) => customhints.status === 'locked')
              .map(({id, customhints}) => ({id, ...customhints.question}))}
            renderItem={({item}) => {
              return (
                <QuestionItem
                  {...item}
                  onPress={() => {
                    bottomSheetRef.current.snapToIndex(0);
                    setSelectedQuestion(item);
                    setSelectedAnswer(null);
                  }}
                />
              );
            }}
          />
        )}
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose
        detached>
        {selectedQuestion && (
          <FullQuestion
            {...selectedQuestion}
            selectedAnswer={selectedAnswer}
            onAnswerChange={onAnswerChange}
            icon={{
              ...(selectedAnswer
                ? !!selectedQuestion[selectedAnswer].isRight
                  ? answerIcons.correct
                  : answerIcons.incorrect
                : answerIcons.empty),
            }}
          />
        )}
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingVertical: PADDING_VERTICAL,
  },
  loading: {alignItems: 'center', justifyContent: 'center'},
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default QuestionsList;
