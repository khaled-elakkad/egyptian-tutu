import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PortalProvider} from '@gorhom/portal';

import MainNavigator from './navigation/Main';

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
      <PaperProvider>
        <SafeAreaProvider>
          <GestureHandlerRootView style={{flex: 1}}>
            <PortalProvider>
              <NavigationContainer>
                <MainNavigator />
              </NavigationContainer>
            </PortalProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </PaperProvider>
    </ApolloProvider>
  );
};
