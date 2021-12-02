import React from 'react';
// Component
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView, View, ViewRow} from '../components/styled/View';
import {Text} from '../components/styled/Text';
import {ButtonBorderRadius} from '../components/styled/Button';
// Image
import {Image} from '../components/styled/Image';

const SearchScreen = ({navigation}) => {
  return (
    <SafeAreaView bgWhite justifyContent="center">
      <View paddingLeft={15} paddingRight={15}>
        <ButtonBorderRadius
          height={50}
          bgTheme
          onPress={() => navigation.navigate('SearchDetail')}>
          <ViewRow
            width="100%"
            alignItems="center"
            justifyContent="space-around">
            <Text ftWhite>GitHub Repository Search...</Text>
            <Ionicons name="search" size={20} color="#FFFFFF" />
          </ViewRow>
        </ButtonBorderRadius>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
