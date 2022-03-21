import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useQuery} from '@apollo/client';
import {HINTS} from '../graphql/queries';
import CameraScreen from '../screens/Camera';
import HintsNavigator from './Hints';
import QuestionsListScreen from '../screens/QuestionsList';
// import BottomSheetTutorialScreen from '../screens/BottomSheetTutorial';
// import GestureHandlerScreen from '../screens/GestureHandler';

const Tab = createBottomTabNavigator();

export default function Routes() {
  useQuery(HINTS);
  return (
    <Tab.Navigator
      initialRouteName="Questions"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Camera':
              iconName = focused ? 'videocam' : 'videocam-outline';
              break;
            case 'Hints':
              iconName = focused ? 'star' : 'star-outline';
              break;
            case 'Questions':
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
              break;
            default:
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Hints" component={HintsNavigator} />
      <Tab.Screen name="Questions" component={QuestionsListScreen} />
      {/* <Tab.Screen name="GestureHandler" component={GestureHandlerScreen} /> */}
      {/* <Tab.Screen name="BottomSheet" component={BottomSheetTutorialScreen} /> */}
    </Tab.Navigator>
  );
}
