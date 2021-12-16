import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import * as gitActions from '../store/modules/git/actions';
import SearchScreen from './search/SearchScreen';
import SearchDetailScreen from './search/SearchDetailScreen';
import FavoriteScreen from './favorite/FavoriteScreen';
import {getData} from '../utils/functions';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'star' : 'star-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3D58C0',
        tabBarInactiveTintColor: '#24292F',
        headerShown: false,
      })}>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

const ScreenRouter = () => {
  const dispatch = useDispatch();

  const onNavigationStateChanged = async () => {
    if (JSON.parse(await getData('repo'))) {
      dispatch(
        gitActions.change_favorite_repo(JSON.parse(await getData('repo'))),
      );
    } else {
      dispatch(gitActions.change_favorite_repo([]));
    }
  };

  return (
    <NavigationContainer onStateChange={onNavigationStateChanged}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SearchDetail" component={SearchDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenRouter;
