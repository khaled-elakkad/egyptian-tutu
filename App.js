import React from 'react';
import {StyleSheet} from 'react-native';
import {ViroARSceneNavigator} from '@viro-community/react-viro';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';
import MainScene from './components/MainScene';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://www.localtours.fun/ar-treasure-hunt/graphql',
  }),
  connectToDevTools: true,
  cache: new InMemoryCache(),
});

export default () => {
  return (
    <ApolloProvider client={client}>
      <ViroARSceneNavigator
        initialScene={{scene: MainScene}}
        styles={{flex: 1}}
      />
    </ApolloProvider>
  );
};

var styles = StyleSheet.create({});
