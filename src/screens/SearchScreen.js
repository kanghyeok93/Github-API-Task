import React from 'react';
// Modules
import Ionicons from 'react-native-vector-icons/Ionicons';
// Component
import {SafeAreaView, View, ViewRow} from '../components/styled/View';
import {Text} from '../components/styled/Text';
import {ButtonBorderRadius} from '../components/styled/Button';

const SearchScreen = ({navigation}) => {
  return (
    <SafeAreaView bgWhite justifyContent="center">
      <View paddingLeft={15} paddingRight={15}>
        <ButtonBorderRadius
          height={50}
          paddingLeft={15}
          bgTheme
          onPress={() => navigation.navigate('SearchDetail')}>
          <ViewRow width="100%" alignItems="center">
            <Ionicons name="search" size={20} color="#FFFFFF" />
            <Text ftWhite marginLeft={15}>
              GitHub Repository Search...
            </Text>
          </ViewRow>
        </ButtonBorderRadius>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
