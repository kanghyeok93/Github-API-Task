import * as React from 'react';
// Modules
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
// Screen
import SearchScreen from './SearchScreen';
import SearchDetailScreen from './SearchDetailScreen';
import FavoriteScreen from './FavoriteScreen';
// Redux
import * as routeActions from '../store/modules/route/actions';

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

  // 네비게이션 외부에서 현재 스크린에 해당하는 이름을 가져오기 위한 작업 함수
  const onNavigationStateChanged = state => {
    state.routes[1]?.name
      ? dispatch(routeActions.change_current_screen_name(state.routes[1]?.name))
      : dispatch(routeActions.change_current_screen_name(''));
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