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
import HintItem from '../components/HintItem';
import {HINTS} from '../graphql/queries';

import {PADDING_HORIZONTAL, PADDING_VERTICAL} from '../layout';

function HintsList({navigation}) {
  const {loading, error, data} = useQuery(HINTS);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={[styles.container, loading && styles.loading]}>
        {loading && <ActivityIndicator />}
        {error && <Text>Error! Please check the logs</Text>}
        {data && (
          <FlatList
            data={data.hints.nodes}
            renderItem={({item}) => {
              return (
                <HintItem
                  {...item}
                  onPress={() =>
                    navigation.navigate('HintImage', {
                      imageDetails: item.customhints.image,
                      title: item.title,
                    })
                  }
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

export default HintsList;
