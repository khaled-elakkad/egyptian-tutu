import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import MainNavigator from './src/navigation/Main';

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
      <SafeAreaProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ApolloProvider>
  );
};
