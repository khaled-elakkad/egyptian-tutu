import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useQuery} from '@apollo/client';
import QuestionItem from '../components/QuestionItem';
import {HINTS} from '../graphql/queries';

import {PADDING_HORIZONTAL, PADDING_VERTICAL} from '../layout';

function QuestionsList({navigation}) {
  const {loading, error, data} = useQuery(HINTS);

  console.log(
    'data',
    data &&
      data.hints.nodes
        .filter(({customhints}) => customhints.status === 'locked')
        .map(({id, customhints}) => ({id, ...customhints.question})),
  );
  const datafff = [
    {
      __typename: 'Hint_Customhints_Question',
      fieldGroupName: 'question',
      firstChoice: {
        __typename: 'Hint_Customhints_Question_FirstChoice',
        choiceText: 'Akhenaten',
        fieldGroupName: 'first_choice',
        isRight: true,
      },
      fourthChoice: {
        __typename: 'Hint_Customhints_Question_FourthChoice',
        choiceText: 'Amenhotep',
        fieldGroupName: 'fourth_choice',
        isRight: null,
      },
      id: 'cG9zdDoyODA=',
      questionText: "Who was Nefertiti's husband?",
      secondChoice: {
        __typename: 'Hint_Customhints_Question_SecondChoice',
        choiceText: 'Khofo',
        fieldGroupName: 'second_choice',
        isRight: null,
      },
      thirdChoice: {
        __typename: 'Hint_Customhints_Question_ThirdChoice',
        choiceText: 'Ramses II',
        fieldGroupName: 'third_choice',
        isRight: null,
      },
    },
    {
      __typename: 'Hint_Customhints_Question',
      fieldGroupName: 'question',
      firstChoice: {
        __typename: 'Hint_Customhints_Question_FirstChoice',
        choiceText: "Altaïr Ibn-La'Ahad",
        fieldGroupName: 'first_choice',
        isRight: true,
      },
      fourthChoice: {
        __typename: 'Hint_Customhints_Question_FourthChoice',
        choiceText: 'Soghomon Tehlirian',
        fieldGroupName: 'fourth_choice',
        isRight: null,
      },
      id: 'cG9zdDoyNzg=',
      questionText: 'What is the name of the assassin?',
      secondChoice: {
        __typename: 'Hint_Customhints_Question_SecondChoice',
        choiceText: 'Sirhan Sirhan',
        fieldGroupName: 'second_choice',
        isRight: null,
      },
      thirdChoice: {
        __typename: 'Hint_Customhints_Question_ThirdChoice',
        choiceText: 'Ramón Mercader',
        fieldGroupName: 'third_choice',
        isRight: null,
      },
    },
    {
      __typename: 'Hint_Customhints_Question',
      fieldGroupName: 'question',
      firstChoice: {
        __typename: 'Hint_Customhints_Question_FirstChoice',
        choiceText: 'Ferdinand de Lesseps',
        fieldGroupName: 'first_choice',
        isRight: true,
      },
      fourthChoice: {
        __typename: 'Hint_Customhints_Question_FourthChoice',
        choiceText: 'Charles-Maurice de Talleyrand',
        fieldGroupName: 'fourth_choice',
        isRight: null,
      },
      id: 'cG9zdDoyNzE=',
      questionText: 'Who built Suez Canal?',
      secondChoice: {
        __typename: 'Hint_Customhints_Question_SecondChoice',
        choiceText: 'Vincent Benedetti',
        fieldGroupName: 'second_choice',
        isRight: null,
      },
      thirdChoice: {
        __typename: 'Hint_Customhints_Question_ThirdChoice',
        choiceText: 'Georges Clemenceau',
        fieldGroupName: 'third_choice',
        isRight: null,
      },
    },
  ];

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
                  // onPress={() =>
                  //   navigation.navigate('HintImage', {
                  //     imageDetails: item.customhints.image,
                  //     title: item.title,
                  //   })
                  // }
                />
              );
            }}
          />
        )}
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
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingVertical: PADDING_VERTICAL,
  },
  loading: {alignItems: 'center', justifyContent: 'center'},
});

export default QuestionsList;
